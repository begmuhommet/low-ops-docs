# Low Ops Platform initial setup

## Platform Requirements

Requirements must be present on build server:
- kubectl
- helm


There are 2 different platform `foundation_type`s:

- `generic` - Should work on any kubernetes custom or managed solution

- `aws` - Optimised platform installation for AWS specific services. Natively support other `aws` services such as EKS, RDS, S3, ELB.

High level AWS diagram:

![LowOps AWS](../assets/aws-foundation.png)

## Platform Configuration

### Configuration Options

#### Image parameters

| Name     | Description | Default Value |
| -------- | -------     | ------- |
|lowops.image.containerImage                          |LowOps platform deploy image name. Request from `CINAQ Team` | "" |

#### Common parameters

| Name     | Description | Default Value |
| -------- | -------     | ------- |
| lowops.config.common.base_domain                    | LowOps platform base domain. Example: `example.low-ops.com`   | "ci.cinaq.com" |
| lowops.config.common.private_registry_url           | LowOps platform private container registry url                | "registry.gitlab.com" |
| lowops.config.common.platform_private_registry_user | LowOps platform private container registry user.   | "lowops-user" |
| lowops.config.common.platform_private_registry_token| LowOps platform private container registry token. Request from `CINAQ Team`  | "" |
| lowops.config.common.platform_state                 | LowOps platform state. Options: `present` - will run platform install or upgrade, `absent` - will destroy all platform components. | "present"|
| lowops.config.common.foundation_type                | LowOps platform foundation type. Options `generic`, `aws` - must be set if running on AWS EKS.                 | "generic" |
| lowops.config.common.aws_default_region             | LowOps platform AWS Default region. When `common.foundation_type` is set to `aws` | "eu-central-1" |
| lowops.config.common.email_domain                   | LowOps platform email domain. Example: `Google workspace domain`          | "cinaq.com" |
| lowops.config.common.general_client_name            | LowOps platform general client name                                       | "CINAQ" |
| lowops.config.common.shared_db_type                 | LowOps platform shared database type for running applications. Options: `platform_pg`, `platform_cnpg`, `rds_mysql`, `rds_postgres` | "platform_cnpg" |
| lowops.config.common.low_ops_env                    | LowOps platform environment name. You can use any string except reserved values: `ci`, `trial`. Example `prod`, `stage`           | "dev" |
| lowops.config.common.platform_version               | LowOps platform version. Example: `v2.0.0.`                                | "" |
| lowops.config.common.mendix_license_id              | LowOps platform mendix license ID                                          | "" |
| lowops.config.common.mendix_license_key             | LowOps platform mendix license key                                         | "" |

#### Ingress parameters

| Name     | Description | Default Value |
| -------- | -------     | ------- |
| lowops.config.ingress.default_ssl_cert              | LowOps platform ssl certificate. Base64 encoded string                     | "" |
| lowops.config.ingress.default_ssl_key               | LowOps platform ssl key. Base64 encoded string                             | "" |
| lowops.config.ingress.aws_elb_eipalloc              | LowOps platform aws elb allocation. CSV of aws ip allocations. When `common.foundation_type` is set to `aws`| "" |

#### S3 apps services gateway parameters

When running with `foundation_type` == `aws`, change s3 gateway values to AWS API Access and Secret keys with access to S3 applications bucket (see the diagram above).
In `generic` type, will point to minio service inside platform.

| Name     | Description | Default Value |
| -------- | -------     | ------- |
| lowops.config.s3_gateway.apps_root_user           | LowOps platform s3 gateway user name to access apps storage buckets       | "" |
| lowops.config.s3_gateway.apps_root_password       | LowOps platform s3 gateway user password to access apps storage buckets   | "" |

#### S3 core services parameters

When running with `foundation_type` == `aws`, change s3 gateway values to AWS API Access and Secret keys with access to S3 core services bucket.
In `generic` type, will point to minio service inside platform (see the diagram above).

| Name     | Description | Default Value |
| -------- | -------     | ------- |
| lowops.config.s3_gateway.core_root_user_set       | LowOps platform s3 gateway user name to access core storage buckets       | "" |
| lowops.config.s3_gateway.core_root_password       | LowOps platform s3 gateway user password to access core storage buckets   | "" |


Values file `values-dev.yaml` example:

```
lowops:
  image:
    containerImage: registry.gitlab.com/cinaq/low-ops-platform/image:0-ci-v2-0-0

  # LowOps platfrom configuration variables
  config:
    common:
      base_domain: ci.cinaq.com
      platform_state: present
      foundation_type: generic
      email_domain: cinaq.com
      general_client_name: CI
      platform_version: v2.0.0
    
```
#### Environment variables

All configuration options could be overriten with `Environment variable`

For instance:

- The helm chart value `lowops.config.common.base_domain` can be replaced with `BASE_DOMAIN` env var. Passed to the deploy service.

## Platform Installation

From the deploy server with access to Kubernetes cluster api. Install platform by installing `lowops` helm chart.

Add lowops helm repository

```
helm repo add --username $PAT_NAME --password $PAT_TOKEN lowops \
    "https://gitlab.com/api/v4/projects/41532268/packages/helm/stable"
```

Run `helm install` command to start platform setup process

```
HELM_CMD="helm upgrade -i lowops-platform lowops/lowops -n $NAMESPACE"
HELM_CMD="$HELM_CMD --set lowops.image.containerImage=$CONTAINER_IMAGE"
HELM_CMD="$HELM_CMD --set lowops.jobEnv.roles=\"$ROLES\""
HELM_CMD="$HELM_CMD --set lowops.jobEnv.environment=$LOW_OPS_ENV"
HELM_CMD="$HELM_CMD --set lowops.jobEnv.baseDomain=$BASE_DOMAIN"
HELM_CMD="$HELM_CMD --set lowops.config.ingress.default_ssl_cert=$DEFAULT_SSL_CERT_BASE64"
HELM_CMD="$HELM_CMD --set lowops.config.ingress.default_ssl_key=$DEFAULT_SSL_KEY_BASE64"
if [ -f "$CHART_VALUES_FILE" ]; then
    HELM_CMD="$HELM_CMD -f $CHART_VALUES_FILE"
fi
if [ -n "$CHART_VERSION" ]; then
    HELM_CMD="$HELM_CMD --version=$CHART_VERSION"
fi
echo "$HELM_CMD"
eval "$HELM_CMD"

timeout=180
count=0

while true; do
    result="$(kubectl get pods -n "$NAMESPACE" --selector job-name=lowops-platform | grep Running || true)"
    if [ -n "$result" ]; then
        break
    fi
    echo "Waiting for job to start"
    sleep 3
    count=$((count+1))
    if [ "$count" -gt "$timeout" ]; then
        kubectl get pods -n "$NAMESPACE" --selector job-name=lowops-platform -o yaml
        echo "Timeout waiting for job to start"
        exit 1
    fi
done
kubectl -n "$NAMESPACE" logs -f --timestamps=true job/lowops-platform
kubectl wait --for=condition=complete --timeout=30s job/lowops-platform -n "$NAMESPACE"
kubectl get job -n "$NAMESPACE" lowops-platform
kubectl get job -n "$NAMESPACE" lowops-platform | grep "1/1" || (echo "Installer job failed" && exit 1)
```