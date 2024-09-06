# Mendix Integration with Low-Ops Platform

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

<img src="../assets/source.jpg" width="500" alt="Git repository URL in Security tab">

### Open Project in Mendix Studio Pro

1. In Mendix Studio Pro, click the "Open Private App" button.

<img src="../assets/open_private_app.jpg" width="500" alt="Open Private App button in Mendix Studio Pro">

2. In the pop-up window, paste the Git repository URL.
3. Click "Connect", then "OK".

<img src="../assets/insert_link.jpg" width="500" alt="Insert Git repository URL">

### Make Changes

1. In the "MyFirstModule" menu, select "Home_Web" from the dropdown list.

<img src="../assets/home_web.jpg" width="500" alt="Selecting Home_Web in Mendix Studio Pro">

2. Double-click the item you wish to modify.
3. Make your desired changes and click "OK".

<img src="../assets/make_change.jpg" width="500" alt="Making changes in Mendix Studio Pro">

### Commit Changes

1. Click the "Commit" button, then "Save and Continue".

<img src="../assets/commit.jpg" width="500" alt="Committing changes in Mendix Studio Pro">

2. In the pop-up window, describe your changes and click "OK".

<img src="../assets/changes.jpg" width="500" alt="Describing changes in commit message">

## Verifying Changes

### Check Activities

1. In the Low-Ops platform, go to the "Activities" tab.
2. Wait for the status to change to "Completed".

<img src="../assets/activities.png" width="500" alt="Activities tab in Low-Ops platform">

### Access Test Environment

1. Go to the "Environments" tab and open the Test environment.

<img src="../assets/environments_overview.jpg" width="500" alt="Environments overview in Low-Ops platform">

2. In the left-side menu, go to "Security".

<img src="../assets/security.jpg" width="500" alt="Security tab in Test environment">

### Verify Changes in Mendix

1. Use the provided URL and login credentials to access Mendix Studio Pro.
2. After logging in, you'll be directed to the Mendix home page where you can observe your implemented changes.

<img src="../assets/mendix_home.jpg" width="500" alt="Mendix home page with implemented changes">

> **Note:** Repeat the verification process for Acceptance and Production environments as needed.