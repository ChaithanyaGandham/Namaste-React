# What is NPM ?

NPM: 
1.  Firstly it does not stands for "Node Package Manager".
2.  It is the largest software library that contains 800,000 code packages.
3.  NPM is a package manager for JavaScript programming language.

# What is "Parcel/Webpack" ? Why do we need it ?

Parcel/Webpack are the module bundler that helps in bundling our application into a minified code that are understandable by the browsers.
Parcel behind the scenes does a lot of work 
    1. Minifying.
    2. Compressing files.
    3. Clear Code.
    4. Building our application
    5. Providing a server.
    6. Tree Shaking.
    7. Differential Bundling.
    8. Bundling.
    9. Optimise.
    10. Content Hashing.
    11. HMR ( Hot Module Replacement )
    12. Different bundlers for Dev and Production.

We need a bundler to run our application faster.

# What is ".parcel-cache" ?

.parcel-cache : It is the file that was generated when we execute the command for parcel

        npx parcel index.html

1.  When we run the above command, we can observe that .parcel-cache and the dist folders are created in the project.
2.  whenever we build the application, then the build version was strored here and cached. It will keep track of all the files, plugins and dependencies and more.
3.  So, whenever we make the second build without changes, we can observe that the build time gets reduced since the data is grabbed from the parcel-cache.
4.  There by performance of the application increases.

# what is npx ?

npx: npx is the prefix we add to the commands which we want to execute.

we use npm to install the packages 

        npm install <package-name>

To execute the packages that are installed in the node modules we use npx

        npx parcel index.html

# What is the difference between "dependencies" vs "devDependencies" ?

If we want to install a particular package under dependencies then we execute the below command:

        npm install <package-name>

If we want to install a particular package under devDependencies then we need to execute the below command:

        npm install -D <package-name>

dependencies vs devDependencies : 
1.  The packages that are added under dependencies can only be used in the development phase or development environment. 
2.  whereas the packages that are installed under devDependencies can also be used in the production environment.

# What is Tree Shaking ?

1.  Tree shaking statically analyzes the imports and exports of each module, and removes everything that is not used.
2.  It even works across dynamic import boundaries, shared bundles and across languages. 
3.  If you use CSS modules, unused classes can also be removed automatically.

# What is Hot module Replacement ?

1.  Hot Module Replcement exchanges, adds or removes modules while the application is running without full reload.
2.  It significantly speeds up the page in few ways.
3.  It retains the application state, which is lost in full reload.
4.  It saves the valuable development time by only updating the modified changes.

# List down your favourite 5 super powers of Parcel and describe any 3 of them in your own words.

Parcel Super Powers:
    1. Caching.
    2. Hot Module Replacement
    3. Tree Shaking
    4. Consistent hashing.
    5. Differential Bundling.

    a.  Consistent Hashing:
            --> It is a distributed hashing scheme that operates independently the servers and the objects in a distributed hash circle or hash ring.
            --> It allows servers and objects to scale without affecting the overall system.
    
    b.  Differential Bundling: 
            --> It supports the older browsers.
            --> Provides code compatibility with the older version of browsers for our application.
                    We add the required versions of the Chrome, Firefox or other browsers under the browserslist in package.json file to make it happen.
            --> Parcel automatically produces:

                        <script type="module"> with modern JavaScript syntax & 
                        <script nomodule> fallback syntax for the older browsers.
    
    c.  Tree Shaking:
            --> It statically analyses the imports and exports for all the modules and removes everything that is not necessary.
            --> Even it checks for the css files and removes the unwanted class names before minifying the code.

# What is .gitignore ? what should we add and not add into it ?

gitigore : 
1.  It is the file we can create in our application whenever we need to avoid some files or folders that are not required to push to the cloud  or git repositories.
2.  The path of the files which are placed inside this file are ignored and does not gets added in the list of modified files before making a commit to the git.
3.  Node-modules folder that is generated when we install the parcel package does not requires to be pushed into the git since if there is package.json and package-lock.json files,    then we can re generate the node-modules folder. Hence we can add node-modules to the gitignore file.
4.  package.json and package-lock.json files are necessary to be moved to the repository since without which we may not install the require code dependency folders or files in the prod environment.
5.  .parcel-cache and  dist folder that are created when we execute the commands for the dev and production deployment.

            npx parcel index.html  (Dev Build)

            npx parcel build index.html ( Prod Build)
        
These files can also be generated using the dev and prod build commands. 

# What is the difference between package.json and package-lock.json ?

package.json: 
    1.   It is the configuration file for the npm.
    2.   It contains the dependencies and devDependencies with corresponding version numbers and project meta data.

package-lock.json:
    1.   It is a lock file that keeps the exact version of the dependencies that are installed in the node-modules.
    2.   Ensures the same versions of dependencies are installed in different environemnts like DEV and Production.

# Why should I not modify "package-lock.json" ?

Modifying the package-lock.json file directly is generally not recommended for several reasons:

    1.  It is designed to be a representation of the exact dependency tree that was generated when you installed your project's dependencies. Manually editing this file can lead to inconsistencies between your dependencies and what is specified in the package-lock.json.
    2.  package-lock.json file ensures that the entire dependency tree for your project is consistent and reproducible.
    3.  Automatic Updates: When you run commands like npm install, npm uses the package-lock.json file to determine which versions of dependencies to install.

# What is node-modules? Is it a good idea to push that on git ?

node-modules:
    1.  node-modules is the folder that gets generated using the below command:

            npm install / npm i

    2.  node-modules contains all the dependencies and its transitive dependencies code folders from the package.json file.
    3.  It is not good to push the node-modules on git. since it is huge and if the project contains the package.json and package-lock.json we can re generate the node-modules folder wiht all the required dependencies for our project.

Hence, the files or folders that can be re generated is not recommended to push to the git.

# What is dist folder ?

Dist folder is generated when we build our application. It can be either Dev build or the Prod build.

    npx parcel index.html (DEV) / npx parcel build index.html (PROD)

It will store the build information of all the files of the application and from which the application renders after the successful built.

# What is browserlists ?

browserlists are nothing but the list of browsers (either old versions or the new versions), that would be listed under the keyword browserslist in package.json file.
So that the application will be able to load the application in the specified browsers in the specified versions.

under package.json file:

    browserslist: [
        "last 2 version" --> Loads the application in all the browsers with last 2 versions.
        "last 2 Chrome version" --> Loads the application in the last 2 versions of the Chrome web browser.
    ]
