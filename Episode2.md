# igniting your app

 NPM  - node package manager
 package.json - configuration file for app
 parcel,web-pack,vite - bundles our app code
 npm install x - x is dependency
 dependency is used for running our code in production as well
 npm install -D x - x is dev dependency
 dev dependency is used for development , but not in production

````

 ~version “Approximately equivalent to version”, will update you to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.

^version “Compatible with version”, will update you to all future minor/patch versions, without incrementing the major version. ^1.2.3 will use releases from 1.2.3 to <2.0.0.
````

package-lock.json - The lockfile is generated and re-generated when node_modules or package.json is changed

node-modules: fetched code of given versions of package.json

tranisitive dependency - our app is depends on x , x depends on y , so y is transitive dependency of our app

NPX stands for Node Package eXecute. It is simply an NPM package runner. It allows developers to execute any Javascript Package available on the NPM registry without even installing it. NPX is installed automatically with NPM version 5.2.0 and above.
> npx -v

## Parcel

* Dev Build
* local server
* HMR - Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload
* File Watching algorithms -written in c++
* Caching - Faster Builds
* Image Optimizations
* minifications
* Bundling
* Compressing
* consistent Hashing
* Code Splitting
* Differntial Bundling - support older browsers
* Error Handling
* Https
* tree shaking - remove unused code
* Different builds for dev and prod