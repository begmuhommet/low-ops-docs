# Application Deployment Guide

This document provides instructions on how to deploy the application in different environments.

## Deploy the Application

> **_NOTE:_** The following steps are the same for Test, Acceptance and Production environments.

### Accessing the Deploy button

There are two ways to access the Deploy button:

<img src="../../assets/deploy_application.jpg" width="500" alt="Deploy button on Environments page">

1. 1. From the Environments page:  
   - Navigate to the Environments tab.
   - Click the Start button next to the specific environment.

<img src="../../assets/deploy_application2.jpg" width="500" alt="Deploy button on Deployment page">

2. From the Deployment page:
   - Open a specific environment.
   - You will be redirected to the Deployment page.
   - Locate the Start button on this page.


### Deploying the Application

1. Once the Deploy button is clicked, a side menu will pop 

<img src="../../assets/deploy_sidebar.jpg" width="500" alt="Deploy sidebar">

   - Select the package version.
   - Configure Constants; provides the possibility to include new values. 
   - Enable/Disable `MyFirstModule.Cleanup`.
   - Check the box for `I acknowledge the app might be offline briefly during deployment`.
   - Click on the`Deploy` button.

2. The status of the environment should change to `Deploying`. 

<img src="../../assets/deploying.jpg" width="500" alt="Deploying status">

3. Once the application is deployed, the status should change to `Running`.

<img src="../../assets/running.jpg" width="500" alt="Running status">

4. Open the environment and click on the URL to ensure that the application opens up successfully.

<img src="../../assets/open_app.jpg" width="500" alt="Open application">