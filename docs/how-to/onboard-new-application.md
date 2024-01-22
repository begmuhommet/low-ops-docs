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










