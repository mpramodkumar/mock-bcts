## _Mock_ : Blockchain - Trade & Supply Chain Finance Platform

This project will be a single page HTML report about various aspects of the Launchpad idea - Blockchain - Trade & Supply Chain Finance Platform

The project uses express as the web server and a static HTML template using with boostrap.

You can clone this project locally. 

## Getting started - Step 1 : Create a new project based on the QuickStart

Clone this repo into new project folder (e.g., `my-proj`).
```shell
git clone https://github.com/CognizantStudio/mock-bcts.git  my-proj
cd my-proj
```
### Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```


### Testing

We would be following Test-driven-development (TDD) / Behaviour-driven-developement (BDD) for this projects.
The test scripts will be placed in __tests__ folder

#### Pre-requisties

* Our tests requires selenium and so you need to have JDK installed in your machine. If not, please
refer [here](http://www.seleniumframework.com/cucumber-jvm-3/install-java-jdk/) 
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









