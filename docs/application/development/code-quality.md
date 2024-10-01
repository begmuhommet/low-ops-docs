# Code Quality

This document provides an overview of the Policies feature in your Mendix applications and instructions on how to access and interpret policy test results.

## Understanding Policies

Policies are a set of pre-defined rules that validate Mendix app development against best practices. They help ensure code quality and adherence to development standards.

## Accessing Policy Details

1. Navigate to the Build tab of your application.
2. Locate the Policies section.
3. Click on "Details" to access more comprehensive information about the Policies.
    <img src="../../../assets/images/policies.jpg" width="500" alt="Policies overview">
4. In the Details view, you will see a summary of policy test results, including:

      - Total number of tests
      - Number of passed tests
      - Number of failed tests

    <img src="../../../assets/images/policies_inside.jpg" width="500" alt="Detailed Policies information">
5. To view details of the failed policies, click the arrow as shown in the screenshot.
    <img src="../../../assets/images/policies_failed.jpg" width="500" alt="Failed Policies details">

## Interpreting Policy Results

- Passed Tests: These indicate areas where your application meets the defined best practices.
- Failed Tests: These highlight areas that may need improvement to align with best practices.

> **Tip:** Focus on addressing failed policy tests to improve the overall quality of your Mendix application.

## Best Practices

- Regularly review policy test results to maintain code quality.
- Address failed policy tests as part of your development cycle.
- Use policy results to guide team discussions on code quality and best practices.

> **Note:** Consistently reviewing and addressing both Security Severity issues and Policy test results can significantly enhance the quality and security of your Mendix applications.