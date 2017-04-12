## _Mock_ : Blockchain - Trade & Supply Chain Finance Platform

This project will be a single page HTML report about various aspects of the Launchpad idea - Blockchain - Trade & Supply Chain Finance Platform

The project uses express as the web server and a static HTML template using with boostrap.

## Getting started

Clone this repo into new project folder (e.g., `mock-bcts-proj`).
```shell
git clone https://github.com/CognizantStudio/mock-bcts.git  mock-bcts-proj
cd mock-bcts-proj
```
### Install npm packages

> Check for npm and nvm version. Preferred to have node version >= 6.9.X

Install the npm packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```

### Testing

We would be following Test-driven-development (TDD) / Behaviour-driven-developement (BDD) for this project using Nightwatch

Refer (here)[https://blog.risingstack.com/end-to-end-testing-with-nightwatch-js-node-js-at-scale/] to know more about Node Js end-to-end testing with Nightwatch.

The test scripts will be placed in __tests__ folder

#### Pre-requisties

* Our tests requires selenium and so you need to have JDK installed in your machine. If not, please
refer [here](http://www.seleniumframework.com/cucumber-jvm-3/install-java-jdk/) 
* Chrome version and selenium standalone server must be compatabile.
* Suggest to use the latest stable version of Chrome.
* ChromeDriver version >= 2.27 or >= 2.28 
* Chrome version must be >= 55.0.2883.0
* The necessary chromedriver and selenium jars are placed in the bin folder. This is only for local testing. For circleCI integration they aren't used.
* nightwatch-dev.json is the configuration while  local testing
* nightwatch.json is the configuration for circleCI tests


#### End-to-end (E2E) Tests

E2E tests are in the `tests` directory, Their filenames must end in `.spec.js`.

Look for the example `tests/spec.js`. Add more `.spec.js` files as you wish (although one usually suffices for small projects);

We have configured Nightwatch to find them.

Thereafter, run them with `npm run e2e`.

That command first compiles, then simultaneously starts the `server` at `localhost:3000`
and launches selenium and then runs the `nightwatch` to execute the tests.  

The pass/fail test results appear at the bottom of the terminal window.

Nightwatch generates a report under `reports` which is easier to read; this file is excluded from source control.

## Alternative way to run E2E Tests

In case of any issues in the earlier method of e2e, we suggest to run the selenium-standalone server manually and
then execute the tests

```shell
npm install -g selenium-standalone
selenium-standalone install --drivers.chrome.version=2.28
selenium-standalone start
npm run tests
```


## GitHub practices

* Create separate branches for your work. Branch name can be in these formats
     * {{initials>}}/us{{number}} : Eg:- vbalas/us1010
     * {{us}}{{number}} : Eg :- us10101
* DO NOT push any change to master directly. It has to go via pull requests only.
* Commit more often. Before you commit make sure to run tests to keep sanctity.
* Perform a rebase from master to get the latest from the master so that master is not way out of sync  
* Merge your changes and resolve conflicts in any.
* Push your branch to remote
* Raise a pull request
* Fix any review comments and perform the same iteration
* Once the review is completed and agreed as final, the reviewer will merge to the master branch if no merge conflicts exists. In case of any merge conflicts, the developer will be informed to resolve them and merge to master.