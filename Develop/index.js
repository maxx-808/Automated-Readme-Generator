const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project title",
      name: "titleInput",
    },
    {
      type: "input",
      message: "Description of your project.",
      name: "descrInput",
    },
    {
      type: "input",
      message: "Steps for installation requirements.",
      name: "installInput",
    },
    {
      type: "input",
      message: "Usage Information.",
      name: "usageInput",
    },
    {
      type: "input",
      message: "Contributors on this project.",
      name: "contribInput",
    },
    {
      type: "input",
      message: "Guidelines for your project.",
      name: "guideInput",
    },
    {
      type: "input",
      message: "Test Instructions.",
      name: "instrucInput",
    },
    {
      type: "list",
      message: "License",
      name: "licenseInput",
      choices: ["MIT", "IBM", "Apache"],
    },
    {
      type: "input",
      message: "Github username: ",
      name: "gitInput",
    },
    {
      type: "input",
      message: "Email Account: ",
      name: "emailInput",
    },
  ])
  .then((res) => {
    console.log(res);
    let licenseBadge = "";
    let licenseChoice = res.licenseInput;
    if (licenseChoice === "MIT") {
      licenseBadge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (licenseChoice === "IBM") {
      licenseBadge =
        "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
    } else if (licenseChoice === "Apache") {
      licenseBadge =
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }

    let readMe = `
# ${res.titleInput}

${licenseBadge}

##Table of Contents

[Description.](#descr)

[steps.](#steps)

[Usage Information.](#usage)

[contributors.](#contrib)

[User Guidelines.](#guide)

[Test Instructions.](#instruc)

[Questions?.](#quest)

<a name="descr"></a>
## Description:

${res.descrInput}

<a name="steps"></a>
## Steps:

${res.installInput}

<a name="usage"></a>
## Usage Information:

${res.usageInput}

<a name="contrib"></a>
## Contributors

${res.contribInput}

<a name="guide"></a>
## User Guidelines:

${res.guideInput}

<a name="instruc"></a>
## Test Instructions:

${res.instrucInput}

<a name="quest"></a>
##Questions?

You can contact me through:

Github Profile: https://www.github.com/${res.gitInput}

Email Address: ${res.emailInput}
`;

    fs.writeFile("README.md", readMe, (err) => {
      if (err) throw err;
      console.log("complete");
    });
  });
