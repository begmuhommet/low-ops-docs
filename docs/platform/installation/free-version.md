# Free Version

The free version of the Low-Ops platform allows you to run Low-Ops on a single Linux machine, making it ideal for testing purposes.

## Prerequisites

### System resources

The minimum system resources required to run the free version of the Low-Ops platform are:

- 16 GB of RAM
- 8-core CPU

## Platform Foundation

This setup requires a single Linux (Ubuntu 22.04) server with internet access.
DNS resolution is required for the platform to work. Create a DNS record for the platform base domain.

## Installation

To start Platform installation process make sure you have ssh access to the server with sudo privileges.
During platform installation all OCI images will be pulled from the docker hub public repositories. But the image pull limit could be reached.
To avoid this issue you have to set docker registry credentials.

NOTE: Before installation you need to set the following environment variables:

```
export BASE_DOMAIN=your.domain.com                   # platform base domain
export PLATFORM_PRIVATE_REGISTRY_USER=your_username  # docker hub username
export PLATFORM_PRIVATE_REGISTRY_TOKEN=your_token    # docker hub PAT-token (Public Read-Only Access Token is sufficient)
``` 

Then run the following command to start the installation:
```
curl -s https://raw.githubusercontent.com/cinaq/helm-charts/refs/heads/main/charts/lowops-platform/scripts/install-platform.sh | bash
```

After installation is complete, you can access the platform portal UI at `https://portal.your.domain.com`.
