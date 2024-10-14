# Pipelines

This document provides instructions on how to access and understand the 'Pipelines' tab.

## Overview

The Pipelines page allows you to view and manage build versions, providing insight into your application's development history and enabling you to track changes over time.

## Accessing the Build Tab

1. From the "Home" page, select an application.
2. Navigate to the "Build" tab.
    
    <img src="../../../assets/images/pipelines.jpg" width="500" alt="Pieplines tab in application">
    
## Understanding Pipelines Components

The Pipelines tab contains several key components:

1. Run: Indicates the package name
2. Commit: Indicates the Commit name
3. Jobs: Identifies and categorizes potential security issues within each build
    
    a. Build
    
    b. Vulerabilities
> **Note:** To learn more about the security report, refer to the [Security Report tutorial](security-report.md).
    
    c. Best practices: Pre-defined rules that validate Mendix app development against best practices

> **Note:** To learn more about the policies, refer to the [Code Quality tutorial](code-quality.md).
    
    d. Unit Testing
    
4. Description: Indicates the name of the environment
5. Created At: Date and time when the application was created

## Making Adjustments

To access additional options:

1. Click the arrow to open the menu
    
    <img src="../../../assets/images/pipelines_inside.jpg" width="500" alt="Pipelines tab options">
    
2. In this menu, you can:

      - Deploy the application
   > **Note:** To learn how to deploy an application, refer to the [Deploy tutorial](../environments/deploy.md).
      - Modify the "Description"

### Modifying the Description

1. Click on "Edit description"
2. In the pop-up window, adjust the description
3. Click the save button
    
    <img src="../../../assets/images/pipelines_description.jpg" width="500" alt="Pipelines description">
    
> **Tip:** Regularly review and update build descriptions to maintain clear documentation of your application versions.