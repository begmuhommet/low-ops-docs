# Mendix

This document guides you through creating and deploying new application versions in the Low-Ops platform using Mendix Studio Pro.

## Overview

Mendix Studio Pro is a powerful low-code development environment that allows developers to rapidly build and customize enterprise-grade applications. This guide covers the entire process, from accessing the Git repository to making changes in Mendix Studio Pro and verifying them across different environments.

## Prerequisites

- Access to the Low-Ops portal
- Mendix Studio Pro installed on your machine

> **Note:** For instructions on logging into the Low-Ops portal, refer to the [Login tutorial](../platform/login.md).

## Creating a New Application Version

### Access Git Repository

1. In the Low-Ops portal, navigate to the "Security" tab.
2. Copy the Git repository URL.

<img src="../../assets/images/source.jpg" width="500" alt="Git repository URL in Security tab">

### Open Project in Mendix Studio Pro

1. In Mendix Studio Pro, click the "Open Private App" button.

<img src="../../assets/images/open_private_app.jpg" width="500" alt="Open Private App button in Mendix Studio Pro">

2. In the pop-up window, paste the Git repository URL.
3. Click "Connect", then "OK".

<img src="../../assets/images/insert_link.jpg" width="500" alt="Insert Git repository URL">

### Make Changes

1. In the "MyFirstModule" menu, select "Home_Web" from the dropdown list.

<img src="../../assets/images/home_web.jpg" width="500" alt="Selecting Home_Web in Mendix Studio Pro">

2. Double-click the item you wish to modify.
3. Make your desired changes and click "OK".

<img src="../../assets/images/make_change.jpg" width="500" alt="Making changes in Mendix Studio Pro">

### Commit Changes

1. Click the "Commit" button, then "Save and Continue".

<img src="../../assets/images/commit.jpg" width="500" alt="Committing changes in Mendix Studio Pro">

2. In the pop-up window, describe your changes and click "OK".

<img src="../../assets/images/changes.jpg" width="500" alt="Describing changes in commit message">

## Verifying Changes

### Check Activity

1. Navigate to the Activity tab 

> **Note:** To learn how to access Activity tab, follow the steps from the [Activities tutorial](../application/activities.md)

2. The status of the changes made will be "Completed".

<img src="../../assets/images/activities.jpg" width="500" alt="Activity tab">

### Access Environment

1. Go to the "Environments" tab and select an environment.

<img src="../../assets/images/environments_overview.jpg" width="500" alt="Environments overview in Low-Ops platform">

2. In the left-side menu, go to "Access".

> **Note:** To learn how to access "Access" tab, follow the steps from the [Access tutorial](../application/environments/access.md)

<img src="../../assets/images/access.jpg" width="500" alt="Access tab">

### Verify Changes in Mendix

1. Use the provided URL and login credentials to access Mendix Studio Pro.
2. After logging in, you'll be directed to the Mendix home page where you can observe your implemented changes.

<img src="../../assets/images/mendix_home.jpg" width="500" alt="Mendix home page with implemented changes">
