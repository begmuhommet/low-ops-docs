This document provides instructions on how to Start, Stop, and Restart the application in different environments.

# Start the Application

## Accessing the Start button

There are two ways to access the Start button:

1. From the Environments page:
   - Navigate to the Environments tab.
   - Click the Start button next to the specific environment (See Figure 1).

2. From the Deployment page:
   - Open a specific environment.
   - You will be redirected to the Deployment page.
   - Locate the Start button on this page (See Figure 2).

**Figure 1: Start button on Environments page**
<img src="../../assets/start_application.jpg" width="500" alt="Start button on Environments page">

**Figure 2: Start button on Deployment page**
<img src="../../assets/start_application2.jpg" width="500" alt="Start button on Deployment page">

## Starting the application 

1. Click the Start button for the desired environment.
2. The status will change to "Starting.
3. Wait for 1-2 minutes while the application initializes.
4. The status will change to "Running" once the application has started (See Figure 3).
5. Click the provided URL to verify that the application opens successfully (See Figure 4).

**Figure 3: Running status**
<img src="../../assets/running.jpg" width="500" alt="Running status">

**Figure 4: Open application**
<img src="../../assets/open_app.jpg" width="300" alt="Open application">

# Stop the Application

- Click on the `Stop` button.

![](../../assets/stop_application.jpg)

- The Status field should change to `Stopping`. 

![](../../assets/stopping_status.jpg)

- Once the application is stopped,the status should change to `Stopped`. 

![](../../assets/stopped.jpg)

- Attempting to access the URL should result in a `503 Service Temporarily Unavailable` error message.
