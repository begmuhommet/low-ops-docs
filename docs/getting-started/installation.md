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

| Name     | Description | Value |
| -------- | -------     | ------- |
|lowops.image.containerImage                          |LowOps platform deploy image name. Request from `CINAQ Team` | "" |

#### Common parameters

| Name     | Description | Value |
| -------- | -------     | ------- |
| lowops.config.common.base_domain                    | LowOps platform base domain. Example: `example.low-ops.com`   | "" |
| lowops.config.common.private_registry_url           | LowOps platform private container registry url                | "registry.gitlab.com" |
| lowops.config.common.platform_private_registry_user | LowOps platform private container registry user. Request from `CINAQ Team`   | "" |
| lowops.config.common.platform_private_registry_token| LowOps platform private container registry token. Request from `CINAQ Team`  | "" |
| lowops.config.common.platform_state                 | LowOps platform state. Options: `present`, `absent`                       | "present"|
| lowops.config.common.storage_class                  | LowOps platform storage class                                         | "csi-hostpath-sc" |
| lowops.config.common.foundation_type                | LowOps platform foundation type. Options `generic`, `aws`                 | "generic" |
| lowops.config.common.aws_default_region             | LowOps platform AWS Default region. When `common.foundation_type == aws` | "eu-central-1" |
| lowops.config.common.aws_platform_account_id        | LowOps platform AWS account id. When `common.foundation_type == aws`      | "" |
| lowops.config.common.aws_foundation_name            | LowOps platform AWS foundation name. When `common.foundation_type == aws` | "" |
| lowops.config.common.email_domain                   | LowOps platform email domain. Example: `Google workspace domain`          | "cinaq.com" |
| lowops.config.common.general_client_name            | LowOps platform general client name                                       | "CINAQ" |
| lowops.config.common.shared_db_type                 | LowOps platform shared database type for running applications. Options: `platform_pg`, `platform_cnpg`, `rds_mysql`, `rds_postgres` | "platform_pg" |
| lowops.config.common.low_ops_env                    | LowOps platform environment name. Reserved values: `ci`, `trial`           | "dev" |
| lowops.config.common.platform_version               | LowOps platform version                                                    | "" |

#### Ingress parameters

| Name     | Description | Value |
| -------- | -------     | ------- |
| lowops.config.ingress.default_ssl_cert              | LowOps platform ssl certificate                                            | "" |
| lowops.config.ingress.default_ssl_key               | LowOps platform ssl key                                                    | "" |
| lowops.config.ingress.aws_elb_eipalloc              | LowOps platform aws elb allocation. CSV of aws ip allocations. When `common.foundation_type == aws`| "" |
| lowops.config.ingress.enable_external_dns           | Install external dns operator?                                             | "false" |
| lowops.config.ingress.enable_letsencrypt            | Install cert manager operator?                                             | "false" |

#### Backstage parameters

| Name     | Description | Value |
| -------- | -------     | ------- |
| lowops.config.backstage.redis_password              | LowOps platform portal redis password                                      | "" |
| lowops.config.backstage.image_tag                   | LowOps platform portal image tag                                           | "" |
| lowops.config.backstage.backend_image_tag           | LowOps platform portal backend image tag                                   | "" |

#### Cnpg parameters

| Name     | Description | Value |
| -------- | -------     | ------- |
| lowops.config.cnpg.services_admin_user              | LowOps platform cnpg service db admin user name                            | "postgres" |
| lowops.config.cnpg.services_admin_password          | LowOps platform cnpg service db admin user password                        | "" |
| lowops.config.cnpg.services_volume_size             | LowOps platform cnpg service db pvc volume size                            | "20Gi" |
| lowops.config.cnpg.apps_admin_user                  | LowOps platform cnpg applications db admin user name                       | "postgres" |
| lowops.config.cnpg.apps_admin_password              | LowOps platform cnpg applications db admin user password                   | "" |
| lowops.config.cnpg.apps_volume_size                 | LowOps platform cnpg applications db pvc volume size                       | "20Gi" |

#### Etcd parameters

| Name     | Description | Value |
| -------- | -------     | ------- |
| lowops.config.etcd.volume_size                      | LowOps platform etcd service volume size                                   | "8Gi" |

#### Gitea parameters

| Name     | Description | Value |
| -------- | -------     | ------- |
| lowops.config.gitea.admin_username                  | LowOps platform gitea admin username                                      | "gitea_admin" |
| lowops.config.gitea.admin_password                  | LowOps platform gitea admin password                                       | "" |
| lowops.config.gitea.postgresql_username             | LowOps platform gitea postgresql username                                  | "admin" |
| lowops.config.gitea.postgresql_password             | LowOps platform gitea postgresql password                                  | "" |
| lowops.config.gitea.postgresql_database             | LowOps platform gitea postgresql db name                                   | "gitea" |
| lowops.config.gitea.admin_email                     | LowOps platform gitea admin email                                | "admin@example.com" |
| lowops.config.gitea.storage_size                    | LowOps platform gitea storage size                                            | "10Gi" |
| lowops.config.gitea.pg_storage_size                 | LowOps platform gitea pg storage size                                         | "10Gi" |
| lowops.config.gitea.keycloak_client_id              | LowOps platform gitea oidc client id                                          | "gitea" |
| lowops.config.gitea.keycloak_client_secret          | LowOps platform gitea oidc client secret                                      | "" |

#### Harbor parameters

| Name     | Description | Value |
| -------- | -------     | ------- |
| lowops.config.harbor.admin_password                   | LowOps platform harbor admin password                     | "" |
| lowops.config.harbor.registry_volume_size             | LowOps platform harbor registry volume size               | "10Gi" |
| lowops.config.harbor.database_volume_size             | LowOps platform harbor database volume size               | "10Gi" |
| lowops.config.harbor.chartmuseum_volume_size          | LowOps platform harbor chartmuseum volume size            | "2Gi" |
| lowops.config.harbor.scandataexport_volume_size       | LowOps platform harbor scandataexport volume size         | "2Gi" |
| lowops.config.harbor.joblog_volume_size               | LowOps platform harbor joblog volume size                 | "2Gi" |
| lowops.config.harbor.redis_volume_size                | LowOps platform harbor redis_volume_size                  | "2Gi" |
| lowops.config.harbor.trivy_volume_size                | LowOps platform harbor trivy_volume_size                  | "2Gi" |
| lowops.config.harbor.keycloak_client_id               | LowOps platform harbor keycloak_client_id                 | "keycloack" |
| lowops.config.harbor.keycloak_client_secret           | LowOps platform harbor                                    | "" |
| lowops.config.harbor.minio_user                       | LowOps platform harbor registry storage user name         | "harbor" |
| lowops.config.harbor.minio_password                   | LowOps platform harbor registry storage user password     | "" |

#### Kanister parameters

| Name     | Description | Value |
| -------- | -------     | ------- |
| lowops.config.kanister.minio_user                     | LowOps platform kanister registry storage user name       | "kanister" |
| lowops.config.kanister.minio_password                 | LowOps platform kanister registry storage user password   | "" |

#### Keycloack parameters

| Name     | Description | Value |
| -------- | -------     | ------- |
| lowops.config.keycloak.admin_password                 | LowOps platform keycloak admin user password              | "" |
| lowops.config.keycloak.db_password                    | LowOps platform keycloak pg database password             | "" |
| lowops.config.keycloak.google_client_id               | LowOps platform keycloak google client id                 | "" |
| lowops.config.keycloak.google_client_secret           | LowOps platform keycloak google client secret             | "" |

#### Minio parameters

| Name     | Description | Value |
| -------- | -------     | ------- |
| lowops.config.minio.root_user                         | LowOps platform minio root user                           | "admin" |
| lowops.config.minio.root_password                     | LowOps platform minio root password                       | "" |
| lowops.config.minio.storage_size                      | LowOps platform minio pvc storage size                    | "8G" |

#### Monitoring stack parameters

| Name     | Description | Value |
| -------- | -------     | ------- |
| lowops.config.monitoring_stack.thanos_minio_user                  | LowOps platform monitoring thanos minio user                  | "thanos" |
| lowops.config.monitoring_stack.thanos_minio_password              | LowOps platform monitoring thanos minio password              | "" |
| lowops.config.monitoring_stack.grafana_keycloak_client_id         | LowOps platform monitoring grafana keycloak client id         | "grafana" |
| lowops.config.monitoring_stack.grafana_keycloak_client_secret     | LowOps platform monitoring grafana keycloak client secret     | "" |
| lowops.config.monitoring_stack.grafana_admin_password             | LowOps platform monitoring grafana admin password             | "" |
| lowops.config.monitoring_stack.prometheus_storage_size            | LowOps platform monitoring prometheus storage size            | "10Gi" |
| lowops.config.monitoring_stack.grafana_smtp_smarthost             | LowOps platform monitoring grafana smtp smarthost             | "" |
| lowops.config.monitoring_stack.grafana_smtp_smarthost_user        | LowOps platform monitoring grafana smtp smarthost user        | "" |
| lowops.config.monitoring_stack.grafana_smtp_smarthost_password    | LowOps platform monitoring grafana smtp smarthost password    | "" |

#### Oauth2 proxy parameters

| Name     | Description | Value |
| -------- | -------     | ------- |
| lowops.config.oauth2proxy.keycloak_client_id      | LowOps platform oauth2proxy keycloak client id            | "oauth2-proxy" |
| lowops.config.oauth2proxy.keycloak_client_secret  | LowOps platform oauth2proxy keycloak client secret        | "" |

#### Pgadmin parameters

| Name     | Description | Value |
| -------- | -------     | ------- |
| lowops.config.pgadmin.password                    | LowOps platform pgadmin user password                     | "" |

#### Postgresql parameters

| Name     | Description | Value |
| -------- | -------     | ------- |
| lowops.config.postgresql.admin_password           | LowOps platform pg admin user password                    | "" |
| lowops.config.postgresql.volume_size              | LowOps platform pg volume size                            | "30G" |

#### S3 apps services gateway parameters

| Name     | Description | Value |
| -------- | -------     | ------- |
| lowops.config.s3_gateway.apps_root_user           | LowOps platform s3 gateway user name to access apps storage buckets       | "" |
| lowops.config.s3_gateway.apps_root_password       | LowOps platform s3 gateway user password to access apps storage buckets   | "" |

#### S3 core services parameters

| Name     | Description | Value |
| -------- | -------     | ------- |
| lowops.config.s3_gateway.core_root_user_set       | LowOps platform s3 gateway user name to access core storage buckets       | "" |
| lowops.config.s3_gateway.core_root_password       | LowOps platform s3 gateway user password to access core storage buckets   | "" |

#### Tekton parameters

| Name     | Description | Value |
| -------- | -------     | ------- |
| lowops.config.tekton_cicd.mendix_license_id       | LowOps platform mendix license ID     | "" |
| lowops.config.tekton_cicd.mendix_license_key      | LowOps platform mendix license key    | "" |

#### Consul parameters

| Name     | Description | Value |
| -------- | -------     | ------- |
| vault.consul_storage_size                         | LowOps platform vault consul backend storage size | "8Gi" |



Values file `values-dev.yaml` example:

```
lowops:
  image:
    containerImage: registry.gitlab.com/cinaq/low-ops-platform/image:lates

  # LowOps platfrom configuration variables
  config:
    common:
      base_domain: ci.cinaq.com
      private_registry_url: registry.gitlab.com
      platform_state: present
      storage_class: standard
      foundation_type: generic
      email_domain: cinaq.com
      general_client_name: CI
      platform_version: v2.0.0
    backstage:
      postgres_password: Pa$$word
      postgres_volume_size: 10Gi
      redis_password: Pa$$word
      image_tag: latest
    gitea:
      admin_username: gitea_admin
      admin_password: Pa$$word
      admin_email: gitea_admin@ci.cinaq.com
      storage_size: 50Gi
      pg_storage_size: 10Gi
      keycloak_client_id: gitea
      keycloak_client_secret: $ecret
    ...
      ...
```
#### Environment variables

All configuration options could be overriten with `Environment variable`

For instance:

- The helm chart value `lowops.config.common.base_domain` can be replaced with `COMMON_BASE_DOMAIN` env var. Passed to the deploy service.

## Platform Installation

Install platform using helm

**NOTE!** Make sure you have access to kubernetes service api 

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