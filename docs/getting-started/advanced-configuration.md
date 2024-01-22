# Helm

## Add LowOps Repository

```
helm repo add --username $PAT_NAME --password $PAT_TOKEN lowops \
    "https://gitlab.com/api/v4/projects/41532268/packages/helm/stable"
helm repo update
```

## Custom Values

To view the available values, run the command:
```
helm show values lowops/lowops
```

### Image Parameters

| Name     | Description | Default Value |
| -------- | -------     | ------- |
|lowops.image.containerImage                          |LowOps platform deploy image name. Request from `CINAQ Team` | "" |

### Common Parameters

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

#### Ingress Parameters

When `foundation_type` is set to `aws`, the ELB (Elastic Load Balancer) is managed through the Ingress Controller platform component. To configure the load balancer to use static IP adresses (typically, you need 2 for a production environment in 2 different subnets/azs, which could be usefull for DNS configuration) update the `lowops.config.ingress.aws_elb_eipalloc` helm values variable as a comma-separated string of AWS EIP allocations IDs.

| Name     | Description | Default Value |
| -------- | -------     | ------- |
| lowops.config.ingress.default_ssl_cert              | LowOps platform ssl certificate. Base64 encoded string                     | "" |
| lowops.config.ingress.default_ssl_key               | LowOps platform ssl key. Base64 encoded string                             | "" |
| lowops.config.ingress.aws_elb_eipalloc              | LowOps platform aws elb allocation. CSV of aws ip allocations. When `common.foundation_type` is set to `aws`| "" |

#### S3 Apps Services Gateway Parameters

When running with `foundation_type` == `aws`, change s3 gateway values to AWS API Access and Secret keys with access to the S3 applications bucket (Refer to the diagram above).
In `generic` type, will point to Minio service inside platform.

| Name     | Description | Default Value |
| -------- | -------     | ------- |
| lowops.config.s3_gateway.apps_root_user           | LowOps platform s3 gateway user name to access apps storage buckets       | "" |
| lowops.config.s3_gateway.apps_root_password       | LowOps platform s3 gateway user password to access apps storage buckets   | "" |

#### S3 Core Services Parameters

When running with `foundation_type` == `aws`, change s3 gateway values to AWS API Access and Secret keys with access to the S3 core services bucket (Refer to the diagram above).
In `generic` type, will point to Minio service inside platform.

| Name     | Description | Default Value |
| -------- | -------     | ------- |
| lowops.config.s3_gateway.core_root_user_set       | LowOps platform s3 gateway user name to access core storage buckets       | "" |
| lowops.config.s3_gateway.core_root_password       | LowOps platform s3 gateway user password to access core storage buckets   | "" |
