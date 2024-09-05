# Build Management

This document provides instructions on how to access and understand the Build tab, Security Severity feature, and Policies in your Mendix applications.

## Accessing the Build Tab

1. Navigate to the Home page and open one of the applications.

<img src="../../assets/home_page.jpg" width="500" alt="Home page with application list">

2. Inside the app, navigate to the "Build" tab.

<img src="../../assets/build.jpg" width="500" alt="Build tab in application">

> **Note:** The Build page allows you to view and manage build versions, providing insight into your application's development history and enabling you to track changes over time.

## Security Severity

The Security Severity feature helps identify and categorize potential security issues within each build, allowing you to address vulnerabilities promptly.

1. Click on "Details" to access more comprehensive information about the security issues detected in a specific build.

<img src="../../assets/security_severity.jpg" width="500" alt="Security Severity overview">

2. In the Details view, you will see:
   - A summary of security vulnerabilities categorized by severity (High, Medium, Low)
   - A table listing specific vulnerabilities including their CVE IDs, affected packages, versions, and fixed versions

<img src="../../assets/security_severity_inside.jpg" width="500" alt="Detailed Security Severity information">

## Policies

Policies are a set of pre-defined rules that validate Mendix app development against best practices.

1. Click on "Details" to access more comprehensive information about the Policies.

<img src="../../assets/policies.jpg" width="500" alt="Policies overview">

2. In the Details view, you will see a summary of policy test results, including:
   - Total number of tests
   - Number of passed tests
   - Number of failed tests

<img src="../../assets/policies_inside.jpg" width="500" alt="Detailed Policies information">

3. To view details of the failed policies, click the arrow as shown in the screenshot.

<img src="../../assets/policies_failed.jpg" width="500" alt="Failed Policies details">

> **Note:** Regularly reviewing Security Severity and Policies can help maintain the quality and security of your Mendix applications.