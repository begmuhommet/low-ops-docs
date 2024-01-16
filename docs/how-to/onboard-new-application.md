# Onboard a new application

## *Create New Application*
Create a new application, make sure it creates without any errrors. 

 1. Follow the link https://portal.trial.low-ops.com/
 2. Click on the button `Sign in with Keycloak OIDC`
 3. Insert username/email and password
 4. Click on the `Sign in` button

Once logged in, you will be redirected into the home page.
![](../assets/low_ops_portal.jpg)

To create a new application, follow the steps below:

 5. In the left menu click on the `Create` button 
 6. Select the `Mendix App Template Generic`
 7. Click on the `Choose` button
 8. Fill in component and tenant names	
 9. Click on `Next step`

Once the application is created, go to `Catalog` tab to view it. 

## *Deploy Application to Test Environment*

Open the newly created application and click on the `Environment` tab on the left side menu. 

1. Select the `Test` environment 
2. Under the `Actions` section, click on the `Deploy` button 
3. On the new page that opens up:
    - Step 1: Select `Main` package
    - Step 2: Leave as is
    - Step 3: `MyFirstModule.Cleanup` - Enable
    - Step 4: Check the `I acknowledge the app might be offline briefly during deployment`
    - And click on `Deploy` button
4. Go back to the Environment tab to see the status of deployment

**Verify**

 - `Deployment request submitted` pop up window appears after the `Deploy` button is clicked. 
 - Status of the application is updated 
 - Deployment is complete successfully once `package version`, `mendix version` and `updated on` fields contain the details. 
 - Select the `Test` environment and click on the URL to make sure that the application opens up successfully. 

## *Deploy Application to Acceptance Environment*

1. Select the `Acceptance` environment 
2. Under the `Actions` section, click on the `Deploy` button 
3. On the new page that opens up:
    - Step 1: Select `Main` package
    - Step 2: Leave as is
    - Step 3: `MyFirstModule.Cleanup` - Enable
    - Step 4: Check the `I acknowledge the app might be offline briefly during deployment`
    - And click on `Deploy` button
4. Go back to the `Environment` tab to see the status of deployment

**Verify**

 - `Deployment request submitted` pop up window appears after the `Deploy` button is clicked. 
 - Status of the application is updated 
 - Deployment is complete successfully once `package version`, `mendix version` and `updated on` fields contain the details of the deployment. 
 - Select the `Acceptance` environment and click on the URL to make sure that the application opens up successfully. 
 

## *Deploy Application to Production Environment*

1. Select the `Production` environment 
2. Under the `Actions` section, click on the `Deploy` button 
3. On the new page that opens up:
    - Step 1: Select `Main` package
    - Step 2: Leave as is
    - Step 3: `MyFirstModule.Cleanup` - Enable
    - Step 4: Check the `I acknowledge the app might be offline briefly during deployment`
    - And click on `Deploy` button
4. Go back to the `Environment` tab to see the status of deployment

**Verify**

 - `Deployment request submitted` pop up window appears after the `Deploy` button is clicked. 
 - Status of the application is updated 
 - Deployment is complete successfully once `package version`, `mendix version` and `updated on"` fields contain the details of the deployment. 
 - Select the `Production` environment and click on the URL to make sure that the application opens up successfully. 
 
## *Commit New Application Source Code to Gitea & Push New Application Package to Harbor*

1. Login to Gitea with your credentials
2. Open the newly created application
3. Open a `README` file and make a change and click on `Commit Changes` button. 
4. Go back to the portal 

**Verify**

- Environment tab: `Test` environment has to be updated with the new `package version`.  
- `Packages` tab: New package has to appear in the list.

## *View Package to Harbor*

In the `Packages` tab, click on the `Package` to view the detials. 
A new window with details should pop up.

## *Stop the Application in Test/Acceptance/Production Environments*

1. Go to the `Environment` tab.
2. Click on the `Test` (`Acceptance`, `Production`) environment.
3. Under the `Actions` section click on the red `Stop` button.
4. Click on `Confirm` in the pop up window that appears.

**Verify**

- The Status field has to change to `Stopped`. 
- The URL should give a `503 Service Temporarily Unavailable` error message.

## *Start the Application in Test/Acceptance/Production Environments*

1. Go to the `Environment` tab
2. Click on the `Test` (`Acceptance`, `Production`) environment
3. Under the `Actions` section click on the `Start` button
4. Click on `Confirm` in the pop up window that appears.

**Verify**

- The Status field has to change to `Running` 
- Give a minute or two for an application to start running again
- Click on the URL to make sure that the application opens up successfully


## *Validate Monitoring tb Metrics' Availability*

1. Go to the `Environment` tab
2. Click on the `Test` (`Acceptance`, `Production`) environment

![](../assets/monitoring.jpg)

3. In the left menu select `Monitor`to review the metrics
4. From the drop down menu in the upper right corner select the period for which to display the metrics, `Today`, `Last 24 hours`, `Last 3 days`, `Last 7 days`, `Last 30 days`.

## *Validate Logs*

1. Go to the `Environment` tab
2. Click on the `Test` (`Acceptance`, `Production`) environment
3. In the left menu select `Log` to review the logs
4. Click on `Configure Log Levels` in the upper right corner.
5. In the pop up window indicate the `Log node`, select `Log level` from a drop down menu, and `Description` if necessary and click on the blue button. 

 ![](../assets/configure_log_levels.jpg)

6. Re-deploy the application by following the steps from `Deploy application to Test environment`
7. Return to "Logs" to review the traces. 

## Create a Backup from a Portal*

1. Go to the `Environment` tab
2. Click on the `Test` (`Acceptance`, `Production`) environment
3. In the left menu select `Backups`
4. Click on the `Create` button to create new Backups
5. In the pop up window include the name and click on `Create`

![](../assets/create_backup.jpg)

6. Backup is successfully created when the status changes to a greeen check sign `Complete`

## *Manage Backups*

1. In the left side menu select `Backups`
2. Select the backup from the list and click on it
3. In the pop up window click on `Restore` button to restore the backup
4. Click on the `Delete` button to delete the backup
5. To import a backup, go back to the list of backups and click on the `Import` button in the upper right corner
6. Upload a file from your computer and wait for it to load
7. Backup is successfully uploaded when the status changes to a greeen check sign `Complete`

## *Validate Privileged Access*

1. Go to the `Environment` tab
2. Click on the `Test` (`Acceptance`, `Production`) environment
3. In the left side menu select `Privileged Access`
4. Use the URL and login credentials to login to Mendix Studio Pro

## *Validate Firewall*

1. Go to the `Environment` tab
2. Click on the `Test` (`Acceptance`, `Production`) environment
3. In the left side menu select `Firewall`
4. Click on the `Create rule` button in the upper right corner

![](../assets/create_firewall_rule.jpg)

5. In the window that pops up indicate the rule details and click on `Save`
6. Re-deploy the application by following the steps from `Deploy application to Test environment`
7. Wait for the application to re-deploy
8. From the `Details` tab use the URL to login to Mendix Studio Pro
9. Verify the created rule works as specified
10. To update the Firewall rule, go back to the `Firewall` tab and click on the three dots that will allow to `Edit` or `Delete` the rule. 

## *Validate Alerts*






