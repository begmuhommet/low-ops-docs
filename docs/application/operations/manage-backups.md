## *Backups*

*Backups serve as essential data insurance, ensuring quick recovery and minimal operational overhead in the face of data loss or system failures.*

To access the `Backups` tab, follow the steps below:


1. Navigate to the `Environments` tab and choose the environment from the list.

![](../assets/environments_overview.jpg)

2. Once one of the environments is selected, a new dropdown navigation menu will appear. 
3. In the left-side menu, select `Backups`.


## *Create a Backup*

To create a backup from the current application, follow the steps below:

1. On the `Backups` page, click on the `Create` button to initiate a new backup. 

![](../assets/create_import_backups.jpg)

2. In the pop-up window, include the name and click on `Create`.

![](../assets/create_backup.jpg)

3. The backup is successfully created when the status changes to a greeen checkmark `Complete`.

## *Import a Backup*

To import a backup, follow the steps below:

1. Click on the `Import` button in the upper right corner.

![](../assets/create_import_backups.jpg)

2. Upload the backup file from your device in the tar.gz archive format and wait for it to load.

3.  The backup is successfully created when the status changes to a greeen checkmark `Complete`.


## *Manage Backups*

1. To restore backups, simply click on the`Restore` button. Click on the arrow button next to the `Restore` button to restore backups in different environmnets. 

> **_NOTE:_** Before restoring a backup, make sure to stop the environment in which the application is running. To stop the application, follow the steps from the [Application Actions tutorial](https://gitlab.com/cinaq/low-ops-docs/-/blob/test-cases-v2.0.0/docs/how-to/application_actions.md). 

2. To delete the backup, click on the three dots and click on the `Delete` button.

![](../assets/restore_backup.jpg)

