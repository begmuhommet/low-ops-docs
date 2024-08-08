## Configure Settings

This page allows you to view and make changes to the current settings. It is divided into five blocks: `Domain`, `Scaling`,`Environment Variables`, `Runtime Settings`, and `Delete this environment`.

**`Domain` Section**

Consists of the `Application URL`, and fields for `TLS Certificate Chain` and `TLS Private Key`.  


![](../../assets/configure_settings.jpg)

**`Scaling` Section** 

Allows to modify `Quotas CPU`, `Quotas memory`, `Replicas`.

![](../../assets/scaling_settings.jpg)

*To make changes*:

 - Update the fields with changes and click on the `Save changes` button.
 
**`Environment Variable` Section**


Allows you to add a new environment variable.


![](../../assets/add_new_environment.jpg)

 - Click on the `Add` button in the upper right corner.
 - In the pop-up window, include the `Name`, `Value`, and `Description`, check the `Protected` checkbox (optional), and click on the `Add` button.

**`Runtime Settings` Section**

Allows you to add a new runtime setting.

![](../../assets/runtime_settings.jpg)

 - Click on the `Add` button in the upper right corner.
 - In the pop-up window, include the `Name`, `Value`, and click on the `Add` button.


> **_NOTE:_** For the new setting values to take effect, re-deploy the application.

**`Delete this environment` Section**

Allows to delete the environment and everything that this environment contains. Simply click on the red `Delete environment` button. 

![](../../assets/delete_environment.jpg)
