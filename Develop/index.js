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
