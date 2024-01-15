# Platform testing
## *Create new application*
Create a new application, make sure it creates without any errrors. 
 1. Follow the link https://portal.trial.low-ops.com/
 2. Click on the button “Sign in with Keycloak OIDC”
 3. Insert username/email and password
 4. Click on the “Sign in” button

Once logged in, you will be redirected into the home page.

To create a new application, follow the steps below:

 5. In the left menu click on the “Create” button 
 6. Select the "Mendix App Template Generic"
 7. Click on the “Choose” button
 8. Fill in component and tenant names	
 9. Click on “Next step”

Once the application is created, go to "Catalog" tab to view it. 

## *Deploy application to a test environment*

Open the newly created application and click on the "Environment" tab on the left side menu. 

 1. Select the "Test" environment 
 2. Under the "Actions" section, click on the "Deploy" button 
 3. On the new page that opens up:
 Step 1: Select "Main" package
 Step 2: Leave as is
 Step 3: MyFirstModule.Cleanup - Enable
 Step 4: Check the "I acknowledge the app might be offline briefly during deployment"
 And click on "Deploy" button
 4. Go back to the Environment tab to see the status of deployment
Verify: 
 - "Deployment request submitted" pop up window appears after the "Deploy" button is clicked. 
 - Status of the application is updated 
 - Deployment is complete successfully once "package version", "mendix version" and "updated on" fields contain the details. 

 ## *Deploy application to a acceptance environment*

 



 







