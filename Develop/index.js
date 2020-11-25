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
## Description:

${res.descrInput}
## Steps:

${res.installInput}
## Usage Information:

${res.usageInput}
## Contributors

${res.contribInput}
## User Guidelines:

${res.guideInput}
## Test Instructions:

${res.instrucInput}
`;

    fs.writeFile("README.md", readMe, (err) => {
      if (err) throw err;
      console.log("complete");
    });
  });
