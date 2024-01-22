# Helm

## Add LowOps repository

```
helm repo add --username $PAT_NAME --password $PAT_TOKEN lowops \
    "https://gitlab.com/api/v4/projects/41532268/packages/helm/stable"
helm repo update
```

## Custom values

To view the available values run command
```
helm show values lowops/lowops
```

### Image parameters

| Name     | Description | Default Value |
| -------- | -------     | ------- |
|lowops.image.containerImage                          |LowOps platform deploy image name. Request from `CINAQ Team` | "" |

### Common parameters

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

When `foundation_type` set to `aws` ELB is managed throug ingress controller platform component. To make ballancer use static ip adresses (usually you need 2 for production environment in 2 different subnets/azs. Could be usefull for dns configuration) update `lowops.config.ingress.aws_elb_eipalloc` helm values variable as comma separated string of aws EIP allocations ids.

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

When running with `foundation_type` == `aws`, change s3 gateway values to AWS API Access and Secret keys with access to S3 core services bucket (see the diagram above).
In `generic` type, will point to minio service inside platform.

| Name     | Description | Default Value |
| -------- | -------     | ------- |
| lowops.config.s3_gateway.core_root_user_set       | LowOps platform s3 gateway user name to access core storage buckets       | "" |
| lowops.config.s3_gateway.core_root_password       | LowOps platform s3 gateway user password to access core storage buckets   | "" |
