# Onboard a new application

## *Create new application*
Create a new application, make sure it creates without any errrors. 

 1. Follow the link https://portal.trial.low-ops.com/
 2. Click on the button `Sign in with Keycloak OIDC`
 3. Insert username/email and password
 4. Click on the “Sign in” button

Once logged in, you will be redirected into the home page.
![](../assets/low_ops_portal.jpg)

To create a new application, follow the steps below:

 5. In the left menu click on the `Create` button 
 6. Select the `Mendix App Template Generic`
 7. Click on the `Choose` button
 8. Fill in component and tenant names	
 9. Click on “Next step”

Once the application is created, go to "Catalog" tab to view it. 

## *Deploy application to Test environment*

Open the newly created application and click on the "Environment" tab on the left side menu. 

1. Select the "Test" environment 
2. Under the "Actions" section, click on the "Deploy" button 
3. On the new page that opens up:
    - Step 1: Select "Main" package
    - Step 2: Leave as is
    - Step 3: MyFirstModule.Cleanup - Enable
    - Step 4: Check the "I acknowledge the app might be offline briefly during deployment"
    - And click on "Deploy" button
4. Go back to the Environment tab to see the status of deployment

**Verify**

 - "Deployment request submitted" pop up window appears after the "Deploy" button is clicked. 
 - Status of the application is updated 
 - Deployment is complete successfully once "package version", "mendix version" and "updated on" fields contain the details. 
 - Select the "Test" environment and click on the URL to make sure that the application opens up successfully. 

## *Deploy application to Acceptance environment*

1. Select the "Acceptance" environment 
2. Under the "Actions" section, click on the "Deploy" button 
3. On the new page that opens up:
    - Step 1: Select "Main" package
    - Step 2: Leave as is
    - Step 3: MyFirstModule.Cleanup - Enable
    - Step 4: Check the "I acknowledge the app might be offline briefly during deployment"
    - And click on "Deploy" button
4. Go back to the Environment tab to see the status of deployment

**Verify**

 - "Deployment request submitted" pop up window appears after the "Deploy" button is clicked. 
 - Status of the application is updated 
 - Deployment is complete successfully once "package version", "mendix version" and "updated on" fields contain the details of the deployment. 
 - Select the "Acceptance" environment and click on the URL to make sure that the application opens up successfully. 
 

## *Deploy application to Production environment*

1. Select the "Production" environment 
2. Under the "Actions" section, click on the "Deploy" button 
3. On the new page that opens up:
    - Step 1: Select "Main" package
    - Step 2: Leave as is
    - Step 3: MyFirstModule.Cleanup - Enable
    - Step 4: Check the "I acknowledge the app might be offline briefly during deployment"
    - And click on "Deploy" button
4. Go back to the Environment tab to see the status of deployment

**Verify**

 - "Deployment request submitted" pop up window appears after the "Deploy" button is clicked. 
 - Status of the application is updated 
 - Deployment is complete successfully once "package version", "mendix version" and "updated on" fields contain the details of the deployment. 
 - Select the "Production" environment and click on the URL to make sure that the application opens up successfully. 
 
## *Commit new application source code to gitea & Push new application package to harbor*

1. Login to Gitea with your credentials
2. Open the newly created application
3. Open a README file and make a change and click on "commit  changes" button. 
4. Go back to the portal 

**Verify**

- Environment tab: "Test" environment has to be updated with the new "package version".  
- Packages tab: New package has to appear in the list

## *View package to harbor*

In the "Packages" tab, click on the "Package" to view the detials. 
A new window with details should pop up

## *Stop the application in Test/Acceptance/Production environments*

1. Go to the "Environment" tab
2. Click on the Test (Acceptance, Production) environment
3. Under the "Actions" section click on the red "Stop" button
4. Click on "Confirm" in the pop up window that appears

**Verify**

- The Status field has to change to "Stopped" 
- The URL should give a "503 Service Temporarily Unavailable" error message

## *Start the application in Test/Acceptance/Production environments*

1. Go to the "Environment" tab
2. Click on the Test (Acceptance, Production) environment
3. Under the "Actions" section click on the "Start" button
4. Click on "Confirm" in the pop up window that appears.

**Verify**

- The Status field has to change to "Running" 
- Give a minute or two for an application to start running again
- Click on the URL to make sure that the application opens up successfully

## *Validate monitoring tb metrics availability*
