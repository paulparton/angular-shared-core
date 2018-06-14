# Angular Shared Core
Experimental infrastructure for sharing Angular and NGRX feature modules between multiple applications. This project is a very early work in progress, and I welcome any feedback

## The problem
Identifying a good solution for creating ngrx stores, angular feature modules and ngrx feature stores that can be shared across multiple angular applications without creating lots of extra work and compatability issues between apps.

## The proposed solution

Creating a mono-repo that contains:
 - "shared-core" providers / classes - core items for an angular application like the root ngrx store and actions
 - feature modules - modules and ngrx feature stores providing a "cohesive set of functionality focused on a specific application need"
 - library modules - collections of components and services providing reusable functionality
 - application modules - Angular applications

This allows:
 - a single base store to be shared across multiple applications.
 - feature modules with feature stores the ability to access the interface of the core store
 - the ability to use different effects in different applications to populate the store from different data sources. e.g a web app might have a HTTP SDK effect to populate the store from the server, but hybrid mobile app might populate the store from a local SQL database that is periodically synched with the server.
 - Rapid development of new applications using these building blocks
 
## Next steps
The next problem to address is building and deploying. While this structure could provide some stability across applications and their shared code (if changing core code breaks any other applications then the whole build should fail) it could also cause massive increases in build times.
