# Low Ops Platform setup

## Platform Foundation

The platform foundation is an infrastructure level that has to provide scalable, flexeble and extensible enviromnemt for the platform lifecycle. To build the platform foundation, you can use cloud providers or on-premise solutions that allow you to run managed or self-managed Kubernetes (k8s) clusters.

There are 2 different platform `foundation_type`s:

- `generic` - Default platform installation method supports any Kubernetes custom or managed solution. All platform components required to run future applications workloads will be installed automatically.

- `aws` - Optimised platform installation for AWS-specific services natively supports other `AWS` services such as EKS, RDS, S3, ELB, EBS. To use AWS-managed data resources, you need to create them before platform installation as part of the foundation setup. Refer to the diagram bellow for more details.

High level AWS diagram:

![LowOps AWS](../assets/aws-foundation.png)

## Platform Configuration

Before starting the platform installation process, check the configuration options below. Change required paramaters to match your environment setup.

Update values file with `values.yaml` example:

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
For more information follow [helm page](./helm.md) 

## Platform Installation

From the deploy server with access to the Kubernetes cluster API. Install the platform by installing `lowops` helm chart.

Add lowops helm repository.

```
helm repo add --username $PAT_NAME --password $PAT_TOKEN lowops \
    "https://gitlab.com/api/v4/projects/41532268/packages/helm/stable"
```

Run `helm install` command to start the platform setup process.

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
