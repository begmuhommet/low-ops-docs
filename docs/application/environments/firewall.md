# Firewall Management

Firewall (IP filtering) serves to restrict application access to specific IP address or IP ranges. 

## Accessing the Firewall Tab

1. Navigate to the "Environments" tab.

<img src="../../assets/environments_overview.jpg" width="500" alt="Environments overview">

2. Choose the desired environment from the list.
3. A new dropdown navigation menu will appear.
4. In the left-side menu, select "Firewall".

<img src="../../assets/firewall_tab.jpg" width="500" alt="Firewall tab">

## Creating a Firewall Rule

1. Click on the "Create rule" button in the upper right corner.

<img src="../../assets/create_firewall_rule.jpg" width="500" alt="Create firewall rule">

2. In the pop-up window, enter the rule details:
* Indicate the path that should be denied or allowed for a specific IP address
* Select the desired action from the drop-down menu: "Allow" or "Deny"
* Input the IP adresses and press "ENTER". 
* Include description 
* Click the "Create" button

3. Re-deploy the application by following the steps from the [Application Tutorial](./actions.md).

## Updating a Firewall Rule

1. Return to the Firewall tab.
2. Click on the three dots at the upper right corner of the rule you want to edit.
3. Click on the Edit button.
4. Update the firewall rule details in the pop-up window that appears.
5. Click Save to apply the changes.

## Deleting a Firewall Rule

1. Return to the Firewall tab.
2. Click on the three dots at the upper right corner of the rule you want to delete.
3. Click on the Delete button.
4. Confirm the deletion in the pop-up window.

**Figure 5: Manage firewall**

<img src="../../assets/manage_firewall.jpg" width="500" alt="Manage firewall">

**Figure 6: Edit firewall**

<img src="../../assets/edit_firewall.jpg" width="500" alt="Edit firewall">