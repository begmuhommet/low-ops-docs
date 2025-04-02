# Hetzner Cloud Single node installation

## Overview
This guide describes how to install the LowOps platform on a single Hetzner Cloud server using their CLI tool. This setup is suitable for testing and development environments. For production use, we recommend using a multi-node setup with proper high availability.

## Prerequisites
- Hetzner Cloud account with API access
- Hetzner Cloud CLI (`hcloud`) installed
- Available domain name with DNS management access
- Minimum system requirements:
  - RAM: 16 GB
  - CPU: 8 vCPUs
  - Disk: 500 GB
  - Ubuntu 22.04 LTS

## Installation steps

### 1. Install and Configure Hetzner Cloud CLI
1. Install the Hetzner Cloud CLI:
   ```bash
   # For macOS using Homebrew
   brew install hcloud
   
   # For Linux
   curl -fsSL https://raw.githubusercontent.com/hetznercloud/cli/master/install.sh | bash
   ```

2. Configure the CLI with your API token:
   ```bash
   hcloud context create lowops
   # When prompted, enter your API token from the Hetzner Cloud Console
   ```

### 2. Create Hetzner Cloud Server
1. Create an SSH key for server access:
   ```bash
   ssh-keygen -t ed25519 -f ~/.ssh/hetzner_lowops
   hcloud ssh-key create --name lowops-key --public-key-from-file ~/.ssh/hetzner_lowops.pub
   ```

2. Create public ipv4 IP address
   ```bash
   hcloud primary-ip create --datacenter=hel1-dc2 --name=lowops-ip --type=ipv4
   ```

3. Create the server with required specifications:
   ```bash
   hcloud server create \
     --name lowops-server \
     --type cxp41 \
     --image ubuntu-22.04 \
     --ssh-key lowops-key \
     --datacenter hel1-dc2 \
     --primary-ipv4 lowops-ip
   ```

4. Get the server's public IP:
   ```bash
   hcloud server list
   ```

### 3. Configure DNS record
1. Configure wildcard `A` record pointing to server public IP address within DNS provider of your choice.
   - Example: If your domain is `paas.company.com`, create an `A` record for `*.paas.company.com` pointing to your server's public IP
   - Wait for DNS propagation (can take up to 48 hours, but usually much faster)

### 4. Install LowOps Platform
1. SSH into your Hetzner server:
   ```bash
   ssh -i ~/.ssh/hetzner_lowops root@your-server-public-ip
   ```

2. Run command to start platform installation:
   ```bash
   curl -sO https://raw.githubusercontent.com/cinaq/helm-charts/refs/heads/main/charts/lowops-platform/scripts/install-platform.sh && chmod +x install-platform.sh && ./install-platform.sh
   ```

3. During installation process you will be prompted to input:
   - `base domain name` (For instance if your portal should be available at `portal.paas.company.com`. Base domain is `paas.company.com`)
   - Docker registry credentials. Current dockerhub pull image limits requires at list pro plan PAT for successfull installation.

4. Wait until `lowops-platform` pod in `lowops-devops` namespace status is `Completed`. Usually takes 20-30 minutes.

5. After installation completes, you can access the platform portal using the credentials from the script output.

### 5. Post-Installation
- Access the platform portal at `https://portal.paas.company.com`
- Start using platform [Platform Administration](../administration/applications/onboard.md)

### 6. Cleanup (Optional)
If you need to remove the server and associated resources:
```bash
hcloud server delete lowops-server
hcloud primary-ip delete lowops-ip
hcloud ssh-key delete lowops-key
```