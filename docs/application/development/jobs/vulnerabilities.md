# Vulnerabilities

The Vulnerabiliies feature helps identify and categorize potential security issues within each build, allowing you to address vulnerabilities promptly.

## Accessing Vulnerabiliies 

1. Navigate to the Pipelines tab of your application.
2. Locate the Jobs section and click on it.
    
    <img src="../../../../assets/images/jobs.jpg" width="500" alt="Jobs overview" />

3. In the new menu that opens up, navigate to the 'Vulnerabilities' tab to access more comprehensive information about the security issues detected in a specific build.
    
    <img src="../../../../assets/images/vulnerabilities.jpg" width="500" alt="Vulnerabilities" />
    
4. Check the "Include image vulnerabilities" box to view security issues related to Docker images used in your application.
    
    <img src="../../../../../assets/images/vulnerabilities_image.jpg" width="500" alt="Include image vulnerabilities checkbox" />
    
5. Interpreting Security Severity Information:
    - A summary of security vulnerabilities categorized by severity (Critical, High, Medium, Low)
    - A table listing specific vulnerabilities including their CVE IDs, affected packages, versions, and fixed versions

> **Note:** Regularly reviewing Vulnerabilities information can help maintain the security of your Mendix applications and address potential issues in a timely manner.