## Mendix License

Low-Ops platform enables you to deploy mendix applications. A license is required to activate the mendix runtime specifically. In this how-to, we will walk you through the process of requesting and activating the mendix license.

## Requesting a License

Make sure you have a contract with Mendix. Once all the paper work has been completed, you can request license keys from Mendix.

  - Navigate to [Mendix New Node](https://newnode.mendix.com/) 
  - Select `Virtual Private Cloud` as *Hosting type*
  <img src="../../assets/images/mendix-license-request-1.png" width="500" alt="Virtual Private Cloud hosting type">
  - Select `Docker` as *Hosting type* and virtual private cloud name `Other`
  <img src="../../assets/images/mendix-license-request-2.png" width="500" alt="Docker">
  - Change the number of environments you need for your application

After that you will receive an email with the license keys:
  <img src="../../assets/images/mendix-license-email.png" width="500" alt="License keys">

## Activating the License

Once you have the license keys, you can activate the license in the Low-Ops platform.

  - Navigate to the [Low-Ops platform](https://low-ops.com)
  - Open your application and for each of the environments you need to activate the license:
  - Go to the `Settings` tab of your application environment. Here you can manage your environment variables.
  - Create a new environment variable with the following name: `LICENSE_ID` and paste the license ID you received in the previous step. It looks like a UUID string.
  - Create a second environment variable with the following name: `LICENSE_KEY` and paste the license key you received in the previous step. This is a very long string.
  - In both cases make sure there are no quotes, spaces or newlines in the environment variable value.
  <img src="../../assets/images/mendix-license-activation.png" width="500" alt="Environment variables">
  - Click on the `Save` button to save the environment variables.
  - Redeploy your application to apply the changes.

If the license is activated successfully, you will see the following log message during app startup:
```
 2025-01-10T15:44:26.217861569Z INFO - Core: Project company name is 'XXXX B.V.'
 2025-01-10T15:44:26.222141590Z INFO - Core: License expiration date is 'Wed Dec 01 00:00:00 GMT XXX'
 2025-01-10T15:44:26.222389737Z INFO - Core: License type is: 'Subscription'
 2025-01-10T15:44:27.518671526Z INFO - Core: Running after-startup-action...
```






