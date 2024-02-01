## *Firewall*

*Serves as a critical component for securing the network and systems.*

**To access the `Firewall` tab, follow the steps below:**

1. On the `Catalog` homepage, choose the application from the list. 
2. Once the application is selected, the navigaion menu will appear on the left side. Click on the `Environments` tab.
3. Select one of the environments such as `Test`,`Acceptance` or `Production`.

![](../assets/environments_overview.jpg)

4. Once one of the environments is selected, a new dropdown navigation menu will appear. 
5. In the left-side menu, select `Firewall`.

**To create a firewall rule, follow the steps below:** 

1. Click on the `Create rule` button in the upper right corner.

![](../assets/firewall_tab.jpg)

2. In the window that pops up, indicate the rule details and click on the `Save` button.

![](../assets/create_firewall_rule.jpg)

3. Re-deploy the application by following the steps from [here](https://gitlab.com/cinaq/low-ops-docs/-/blob/test-cases-v2.0.0/docs/how-to/application_actions.md).

4. From the `Details` tab, use the URL to log in to Mendix Studio Pro.

![](../assets/mendix_url.jpg)

5. Verify that the created rule works as specified.

**To update the firewall rule, follow the steps below:**

1. Return to the `Firewall` tab and click on the three dots, which will allow to `Edit` or `Delete` the rule. 

![](../assets/manage_firewall.jpg)
