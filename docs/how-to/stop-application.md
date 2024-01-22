## *Stop the Application in the Test/Acceptance/Production Environments*

1. Go to the `Environment` tab.
2. Click on the `Test` (`Acceptance`, `Production`) environment.
3. Under the `Actions` section, click on the red `Stop` button.

![](../assets/stop_application.jpg)

4. Click on `Confirm` in the pop up window that appears.

**Verify**

- The Status field should change to `Stopped`. 
- Attempting to access the URL should result in a `503 Service Temporarily Unavailable` error message.
