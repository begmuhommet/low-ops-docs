# Light Version

The light version of the Low-Ops platform allows you to run Low-Ops on a single Linux machine, making it ideal for testing purposes.

## Prerequisites

### Required Packages

Ensure the following binaries are installed on the machine with access to the Kubernetes API before starting:

- `kubectl` - Version `v1.27`
- `helm` - Version `v3.9`
- `kind` - Version `v1.27`
- `docker` - Version `27.3.1`

### Kubernetes Cluster

The Low-Ops platform requires a Kubernetes cluster. Currently supported Kubernetes versions are:

- `v1.27`
- `v1.28`
- `v1.29`

### System Resources

To run the platform, the system should have at least 16 GB of RAM and an 8-core CPU.

When running the platform on a single machine, the following changes are required:

Update the following files with content:

/etc/security/limits.conf
```
*               soft    nofile           1048570
*               hard    nofile           1048576
```

- This increases the maximum number of open files (file descriptors) that processes can use
- Container platforms like Kubernetes and Docker can open many files simultaneously due to running multiple containers, handling logs, and managing network connections
- The default limits are often too low for production workloads
- Without these increases, you might see errors like "too many open files" or performance degradation

/etc/sysctl.conf
```
fs.inotify.max_user_watches=100000
fs.inotify.max_user_instances=100000
```
- inotify is a Linux kernel subsystem that provides file system event monitoring
- Kubernetes and container workloads use this to watch for configuration changes, file updates, etc.
- The default limits are typically too low for Kubernetes clusters
- Without these increases, you might see errors like "no space left on device" (despite having disk space) or "too many open files" when Kubernetes tries to watch config files

## Platform Foundation

This setup requires a single Linux server with internet access and Docker installed.

## Platform Installation

### Step 1: Install Kubernetes Cluster

Create a `kind-config.yaml` configuration file with the following content:

```yaml
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
- role: worker
- role: worker
- role: worker
networking:
  apiServerPort: 6443
  apiServerAddress: 0.0.0.0
```

Create the Kubernetes cluster on the Linux server. Replace `dev` with your company or project name:

```bash
kind create cluster --name dev --config ./kind-config.yaml --image "kindest/node:v1.27.3" -v 1
```

Retrieve the Kubernetes configuration from the created cluster:

```bash
kind get kubeconfig --name=dev > ~/.kube/config
```

### Step 2: Install Proxy (Required Only for Light Platform Installation)

Create an `haproxy.cfg` file with the following content:

```cfg
global
    log stdout format raw local0 info

defaults
    log global
    retries 2
    option dontlognull
    timeout connect 10000
    timeout server 600000
    timeout client 600000

frontend http_frontend
    bind *:80 
    default_backend http_backend

frontend https_frontend
    bind *:443 
    default_backend https_backend

backend https_backend
    server nginx-ingress 172.19.255.200:443 check send-proxy

backend http_backend
    server nginx-ingress 172.19.255.200:80 check send-proxy
```

Start the HAProxy service using the following command:

```bash
docker run -d \
    --restart unless-stopped \
    --name haproxy \
    --network=kind \
    -v $(pwd)/haproxy.cfg:/usr/local/etc/haproxy/haproxy.cfg:ro \
    -p 443:443 \
    -p 80:80 \
    haproxytech/haproxy-alpine:2.4
```

For further steps, please refer to the main installation page.
