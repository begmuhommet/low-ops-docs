# Onboard New Application

## *Create New Application*
Create a new application, ensuring it is created without any errors.

 1. Navigate to the link: https://portal.trial.low-ops.com/
 2. Click on the button `Log in with SSO`.
 3. Enter your username/email and password.
 4. Click on the `Sign in` button.

Once logged in, you will be redirected to the Low-Ops portal.

![](../assets/low_ops_portal.jpg)

To create a new application, follow the steps below:

 5. In the left menu, click on the `Create` button. 
 6. Select the `Mendix App Template Generic`.
 7. Click on the `Choose` button.
 8. Fill in the fields for the `Unique name of the component` and `Tenant name of the component`.	
 9. Click on `Create`.

After the application is created, go to the Catalog tab to view it in the list of components. 

## *Deploy the Application to the Environment*

The following steps are the same for Test, Acceptance and Production environments. 

Open the newly created application and click on the `Environment` tab on the left side menu. 

1. Select the `Test` (`Acceptance`, `Production`) environment.
2. Under the `Actions` section, click on the `Deploy` button. 
3. On the new page that opens up:
    - Step 1: Select `Main` package.
    - Step 2: Leave it as is.
    - Step 3: Enable `MyFirstModule.Cleanup`.  
    - Step 4: Check the box for `I acknowledge the app might be offline briefly during deployment`.
    - Click on `Deploy` button.
4. Go back to the Environment tab to see the status of deployment.

**Verify**

 - A pop-up window appears with the message `Deployment request submitted` after clicking the `Deploy` button.
 - Confirm that the status of the application is updated.
 - Verify the successful completion of deployment when the `package version`, `Mendix version`, and `updated on` fields contain the necessary details.
 - Select the `Test` (`Acceptance`, `Production`) environment and click on the URL to ensure that the application opens successfully.

 
## *Commit the New Application Source Code to Gitea and Push the New Application Package to Harbor.*

1. Login to Gitea with your credentials.
2. Open the newly created application.
3. Open a `README` file, make a change, and click on the `Commit Changes` button. 
4. Go back to the portal. 

**Verify**

- In the `Environment` tab, the `Test` environment should be updated with the new `package version`.  
- In the`Packages` tab, new package should appear in the list.

## *View Package in Harbor*

In the `Packages` tab, click on the `Package` to view the detials. 
A new window with details should pop up.

## *Stop the Application in the Test/Acceptance/Production Environments*

1. Go to the `Environment` tab.
2. Click on the `Test` (`Acceptance`, `Production`) environment.
3. Under the `Actions` section, click on the red `Stop` button.
4. Click on `Confirm` in the pop up window that appears.

**Verify**

- The Status field should change to `Stopped`. 
- Attempting to access the URL should result in a `503 Service Temporarily Unavailable` error message.

## *Start the Application in the Test/Acceptance/Production Environments*

1. Go to the `Environment` tab
2. Click on the `Test` (`Acceptance`, `Production`) environment.
3. Under the `Actions` section click on the `Start` button.
4. Click on `Confirm` in the pop up window that appears.

**Verify**

- The Status field should change to `Running`. 
- Allow a minute or two for the application to start running again.
- Click on the URL to ensure that the application opens up successfully.







