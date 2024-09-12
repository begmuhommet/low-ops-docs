# High Level Architecture

Low-Ops is made up of a set of components that work together to provide a platform for running applications. 

## Overview

There are 3 main layers in Low-Ops architecture:

1. Applications - Custom-built applications that run on Low-Ops.
2. Platform - The platform that runs the applications. It also provides a diverse set of services that are used by the applications or enables developers to build, deliver, and own their applications end-to-end.
3. Foundation - The foundation that the platform runs on. This is the cloud provider or on-premise datacenter that provides a cloud-agnostic foundation which must be a Kubernetes cluster.


```mermaid
    C4Context
      title Low-Ops
      System_Boundary(Enterprise, "Enterprise") {
        Person(Developer, "develops and deploys applications")
        Person(Operator, "Manages the platform")
        Person(EndUser, "Uses business or consumer applications")

        System(EnterpriseIDP, "Enterprise Identity Provider")

        System_Boundary(Apps, "Applications") {
            System(AppMendix, "Mendix App")
            System(AppNextJS, "NextJS App")
            System(AppDjango, "Django App")
            System(AppPHP, "PHP App")
        }

        System_Boundary(Platform, "Platform") {
            UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="1")
            System_Boundary(CoreServices, "Core Services") {
                System(Registry, "Container Registry")
                System(Ingress, "Ingress")
                System(IDP, "Identity Provider")
                System(Database, "Core Database Service")
                System(Observability, "Observability")
            }
            System_Boundary(DevOpsServices, "DevOps Services") {
                System(Portal, "Portal")
                System(Pipelines, "Pipelines")
                System(SCM, "Source Code Management")
            }
            System_Boundary(DataServices, "Data Services") {
                System(SharedDatabase, "Shared Database Service")
                System(SharedObjectStorage, "Shared Object Storage Service")
            }
        }

        System_Boundary(Foundation, "Foundation") {
            System(aws, "Amazon Web Services")
            System(GCP, "Google Cloud Platform")
            System(Azure, "Azure Cloud Platform")
            System(OpenShift, "OpenShift")
            System(K8s, "Any Kubernetes compatible platform")
        }
      }

      Rel(Developer, Portal, "uses")
      Rel(Operator, Portal, "uses")
      Rel(EndUser, AppMendix, "uses")
      Rel(EndUser, AppPHP, "uses")
      Rel(EndUser, AppDjango, "uses")
      Rel(EndUser, AppNextJS, "uses")
      Rel(IDP, EnterpriseIDP, "Delegate authentication")
      UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="1")
```

## Philosophy

Deploying components onto Kubernetes is not rocket science. However, having the platform to be reproducible, scalable, and maintainable is a challenge. Low-Ops is designed to be easy to use and requires minimal maintenance. It is designed to be used by developers and operators with minimal knowledge of Kubernetes and cloud infrastructure. You will be able to do all your tasks through the Low-Ops Portal supported with best practices of delivering applications to your business and customers.

Because the whole platform is fully automated and runs on your infrastructure, you have 100% control over your data and can be sure that it is secure. You can also easily integrate it with your existing systems and processes.

Don't want or need upgradability of Low-Ops? You can modify it to fit your needs. You can also use it as a starting point for your own platform.