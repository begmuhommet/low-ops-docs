## *Deploy Specific Application Version to the Environment*

> **_NOTE:_** The following steps are the same for Test, Acceptance and Production environments. 

1. On the homepage, choose the application from the list. 

![](../assets/home_page.jpg)

2. Once the application is selected, click on the `Environments` tab.

3. Select one of the environments such as `Test`,`Acceptance` or `Production`.

![](../assets/environments_overview.jpg)

4. Click on the `Deploy` button as shown on the screenshot.  

![](../assets/deploy_application.jpg)


5. In the side menu that opens up:

![](../assets/deploy_sidebar.jpg)

    - Step 1: Select the package version.

    - Step 2: Confugire Constants; provides the possibility to include new values. 

    - Step 3: Enable/Disable `MyFirstModule.Cleanup`.

    - Step 4: Check the box for `I acknowledge the app might be offline briefly during deployment`.

    - Click on the`Deploy` button.

6. The status of the environment should change to `Deploying`. 

![](../assets/deploying.jpg)

7. Once the application is deployed, the status should change to `Running`.

  ![](../assets/running.jpg)


8. Open the `Test` (`Acceptance`, `Production`) environment and click on the URL to ensure that the application opens up successfully.

![](../assets/open_app.jpg)

## *Start the Application*


1. Under the `Actions` section click on the `Start` button.

![](../assets/start_application.jpg)

2. Click on the `Confirm` button in the pop up window that appears.

3. The Status field should change to `Deploying`. 

![](../assets/deploying_status.jpg)

4. Allow a minute or two for the application to start running again.

5. Once the status changes to `Ready`, click on the URL to ensure that the application opens up successfully.

![](../assets/ready_status.jpg)


## *Stop the Application*

1. Under the `Actions` section, click on the `Stop` button.

![](../assets/stop_application.jpg)

2. Click on the `Confirm` button in the pop up window that appears.

3. The Status field should change to `Stopped`. 

![](../assets/stopped_status.jpg)

4. Attempting to access the URL should result in a `503 Service Temporarily Unavailable` error message.
 

 ## *Restart the Application*


1. Under the `Actions` section, click on the red `Restart` button.

![](../assets/restart_application.jpg)

2. Click on `Confirm` in the pop up window that appears.

![](../assets/restart_pop_up_window.jpg)

3. The Status field should change to `Deploying`. 

![](../assets/deploying_status.jpg)

4. Allow a minute or two for the application to start running again.

5. Once the status updates to `Ready`, click on the URL to ensure that the application opens up successfully.

![](../assets/ready_status.jpg)
