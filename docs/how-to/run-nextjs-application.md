# Run Next.js Application on LowOps Platform

## Overview
LowOps platform v4 introduces support for various frameworks beyond Mendix applications. This guide will walk you through the process of deploying a Next.js application on the LowOps platform.

## Prerequisites
- Access to LowOps platform
- A Next.js application template to deploy

## Deployment Steps

### 1. Create New Application
1. Log in to the LowOps platform
2. Click the `Create app` button on the main dashboard
3. Select `Next.js App Default template` from the template list
   - Alternatively, you can upload your own template. See [App Templates](../platform/administration/app-templates.md) for more information
4. Fill in the following details:
   - **Name**: Enter a unique name for your application
   - **Description**: (Optional) Add a description of your application
5. Click `Create app` to proceed

### 2. Initial Setup
- The platform will automatically create your application
- The CI pipeline will build the first OCI image from your template
- This process typically takes a few minutes

### 3. Environment Configuration
1. Navigate to your application in the portal
2. Go to the `Environments` tab
3. Click to create a new environment
   - Configure environment-specific settings as needed

### 4. Deployment
Once your environment is created, you can deploy your first application version:
- On the created environment select deploy action
- Select the version you want to deploy
- Acknowledge that you want to make deployment 
- Click deploy to start the deployment process

## Next Steps
- Monitor your application's deployment status
- Configure additional settings as needed
- Configure custom domains if required

For more information about managing your application, refer to the [Application Management](../platform/administration/app-management.md) documentation.