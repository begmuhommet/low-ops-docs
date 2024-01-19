# Deploy Application

## *Deploy specific Application version to the Environment*

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

 
## *Create new application version release*

TODO: use MX studio pro to make a release. Change below...

1. Login to Gitea with your credentials.
2. Open the newly created application.
3. Open a `README` file, make a change, and click on the `Commit Changes` button. 
4. Go back to the portal. 

**Verify**

- In the `Environment` tab, the `Test` environment should be updated with the new `package version`.  
- In the`Packages` tab, new package should appear in the list.
