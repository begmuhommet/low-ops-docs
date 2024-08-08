# Mendix

This documentation guides you through creating and deploying new application versions in the Low-Ops platform using Mendix Studio Pro. Mendix Studio Pro is a powerful low-code development environment that allows developers to rapidly build and customize enterprise-grade applications. The guide covers the entire process, from accessing the Git repository to making changes in Mendix Studio Pro and verifying them across different environments.

## Low-Ops Portal

> **_NOTE:_** To login to the Low-Ops portal, follow the steps from the [Onboard New Application tutorial](../platform/administration/onboard-new-application.md). 

## Open app overview

> **_NOTE:_** To navigate to the `Security` tab and access the Git repository URL, follow the steps from the [Security tutorial](../application/operations/security.md).

## Make changes in Mendix Studio Pro

To create a new application version in the Low-Ops platform, follow the steps below:

- Inside the Low-Ops portal navigate to the `Security` tab and then copy the Git repository URL.

 ![](../assets/source.jpg)   

- Within Mendix Studio Pro, locate and select the `Open Private App` button.

![](../assets/open_private_app.jpg)

- In the pop-up window, paste the previously copied Git repository URL and click on the `Connect` button. Afterward, click on `OK` and wait for the program to load.

![](../assets/insert_link.jpg)

- Choose `Home_Web` from the dropdown list in the `MyFirstModule` menu.

![](../assets/home_web.jpg)

- Double-click on the item you wish to modify, make the desired changes, and then click on `OK`.

![](../assets/make_change.jpg)

- Select the `Commit` button, and then proceed by clicking on `Save and Continue`.

![](../assets/commit.jpg)

- In the pop-up window, specify the changes that were made, and then click on the `OK` button.

![](../assets/changes.jpg)

- Navigate back to the Low-Ops platform and access the `Activities` tab. After the changes are complete, you will observe the status transition to `Completed`.

![](../assets/activities.png)

- Proceed to the `Environments` tab, and open the `Test` (`Acceptance`, `Production`) environment.

![](../assets/environments_overview.jpg)

- In the left-side menu that appears, go to `Security`.

![](../assets/security.jpg)

- Use the URL and login credentials to log in to `Mendix Studio Pro`.
- After a successful login, you will be automatically directed to the Mendix home page, where you can observe the implemented changes.

![](../assets/mendix_home.jpg)
