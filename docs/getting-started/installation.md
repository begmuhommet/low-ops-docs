# Low Ops Platform setup

## Platform Foundation

The platform foundation is an infrastructure level that has to provide a scalable, flexeble and extensible enviromnemt for the platform lifecycle. To build the platform foundation, you can use cloud providers or on-premise solutions that allow you to run managed or self-managed Kubernetes (k8s) clusters.

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

if [ -f "$CHART_VALUES_FILE" ]; then
    HELM_CMD="$HELM_CMD -f $CHART_VALUES_FILE"
fi
if [ -n "$CHART_VERSION" ]; then
    HELM_CMD="$HELM_CMD --version=$CHART_VERSION"
fi
echo "$HELM_CMD"
eval "$HELM_CMD"
