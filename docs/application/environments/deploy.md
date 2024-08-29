# Application Deployment Guide

This document provides instructions on how to deploy the application in different environments.

## Deploy the Application

> **_NOTE:_** The following steps are the same for Test, Acceptance and Production environments.

### Accessing the Deploy button
There is one way to access the Deploy button:

<img src="../../assets/home_page.jpg" width="500" alt="Homepage with application list">

1. From the homepage:
   * Choose the application from the list.
   * Once the application is selected, click on the `Environments` tab.
   * Select the environment

<img src="../../assets/environments_overview.jpg" width="500" alt="Environments overview page">

   * Click on the `Deploy` button  

<img src="../../assets/deploy_application.jpg" width="500" alt="Deploy button on Environments page">

### Deploying the Application

1. In the side menu that opens up:

<img src="../../assets/deploy_sidebar.jpg" width="500" alt="Deploy sidebar">

   * Step 1: Select the package version.
   * Step 2: Configure Constants; provides the possibility to include new values. 
   * Step 3: Enable/Disable `MyFirstModule.Cleanup`.
   * Step 4: Check the box for `I acknowledge the app might be offline briefly during deployment`.
   * Click on the`Deploy` button.

2. The status of the environment should change to `Deploying`. 

<img src="../../assets/deploying.jpg" width="500" alt="Deploying status">

3. Once the application is deployed, the status should change to `Running`.

<img src="../../assets/running.jpg" width="500" alt="Running status">

4. Open the environment and click on the URL to ensure that the application opens up successfully.

<img src="../../assets/open_app.jpg" width="500" alt="Open application">