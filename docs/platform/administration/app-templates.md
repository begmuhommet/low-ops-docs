# App Templates

This guide provides step-by-step instructions for preparing, uploading, modifying, and deleting app templates in the Administration section.

## Preparing App Template

Currently, only the `tar.gz` format is supported for app templates. Follow these steps to prepare your template:

1. Navigate to the folder containing your application template (make sure it's not git repository, remove all `.git` files or folders).
2. Run the following command to compress the application:

    ```bash
    tar czf -C <app-folder> <template-name>.tar.gz .
   ```

## Uploading App Template

1. Access the Administration section.
2. Navigate to the 'App template' tab in the left sidebar.
3. Click the 'Upload template' button located at the top right of the page.
    
    <img src="../../../assets/images/app_templates.jpg" width="500" alt="App templates">

4. In the pop-up window that appears:
    
    - Enter a name for the template
    - Select the appropriate type from the dropdown menu
    - Provide a description (optional, but recommended)
    - Click 'Select file' to choose your template file
    - Click the 'Upload' button to finalize the process
    
    <img src="../../../assets/images/upload_template.jpg" width="500" alt="Upload template">
    
> **Important:** Only `.tar.gz` files are supported for upload. Ensure your template is in the correct format before attempting to upload.

## Modifying App Template

1. Locate the template you wish to modify in the list.
2. Click on the three-dot menu (⋮) to the right of the template name.
3. Select 'Edit' from the dropdown menu.
    
    <img src="../../../assets/images/edit_template.jpg" width="500" alt="Edit template">

4. In the pop-up window, you can modify the following:
    
    - Template name
    - Type
    - Description

5. After making your changes, click the 'Save' button to apply the modifications.
    
    <img src="../../../assets/images/save_edit.jpg" width="500" alt="Save edit">

> **Note:** The file itself cannot be changed through this interface. If you need to update the template file, you'll need to upload a new template.

## Deleting App Template

1. Find the template you want to delete in the list.
2. Click on the three-dot menu (⋮) next to the template name.
3. Choose 'Delete' from the dropdown options.
    
    <img src="../../../assets/images/delete_template.jpg" width="500" alt="Delete template">

4. A confirmation pop-up will appear. Review the template details to ensure you're deleting the correct one.
5. Click the 'Delete' button in the pop-up to confirm and permanently remove the template.
    
    <img src="../../../assets/images/deleting_template.jpg" width="500" alt="Deleting template">

> **Warning:** Deleting a template is irreversible. Make sure you want to proceed before confirming the deletion.
