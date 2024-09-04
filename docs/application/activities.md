# Audit Logging System

This document explains the LowOps Platform Audit logging system and how to access application audit logs.

## Overview

The LowOps Platform Audit logging system is designed for recording events and actions within the system for the purpose of:
- Monitoring
- Analyzing
- Ensuring accountability

It captures information about activities such as:
- Application onboarding
- Application configuration changes
- Data backups and restore actions
- Application pipeline triggers on commits to repository
- Other significant events within the platform or applications

## Accessing Application Audit Logs

1. Navigate to the desired application in the LowOps portal.
2. Locate the "Activities" section.

<img src="../../assets/activities.png" width="500" alt="Activities section showing audit log events">

3. In the Activities section, you will find the following information for each audit log event:
   - Timestamp
   - Action
   - Actor
   - Environment
   - Status

> **Note:** Regular review of audit logs can help maintain security, track changes, and ensure compliance with organizational policies.