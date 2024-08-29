#Application Deployment Guide

This document provides instructions on how to deploy the application in different environments.

##Deploy the Application

###Accessing the Deploy button

There is one way to access the Deploy button:
<img src="../../assets/environments_overview.jpg" width="500" alt="Environments overview page">

From the Environments page:

Navigate to the homepage and choose the application from the list.
Click on the Environments tab.
Select the desired environment.
Locate the Deploy button next to the specific environment.




NOTE: The following steps are the same for Test, Acceptance and Production environments.

Deploying the Application

Click the Deploy button for the desired environment.
<img src="../../assets/deploy_application.jpg" width="500" alt="Deploy button on Environments page">

A side menu will open up with deployment options:
<img src="../../assets/deploy_sidebar.jpg" width="300" alt="Deploy sidebar">

Step 1: Select the package version.
Step 2: Configure Constants; provides the possibility to include new values.
Step 3: Enable/Disable MyFirstModule.Cleanup.
Step 4: Check the box for I acknowledge the app might be offline briefly during deployment.


Click the Deploy button at the bottom of the sidebar.
The status will change to "Deploying".
<img src="../../assets/deploying.jpg" width="500" alt="Deploying status">

Wait while the application deploys.
The status will change to "Running" once the application has been deployed.
<img src="../../assets/running.jpg" width="500" alt="Running status">

Open the environment and click on the provided URL to verify that the application opens successfully.
<img src="../../assets/open_app.jpg" width="500" alt="Open application">