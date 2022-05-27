// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
//const = questions
inquirer.prompt([
    {
        type: "input",
        message: "What is the name of your project?",
        name: "Project Name",
    },
    {
        type: "input",
        message: "Please enter your GitHub username.",
        name: "GitHub",
    },
    {
        type: "input",
        message: "Please enter your Email address.",
        name: "Email",
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please provide license information.',
        choices: ['MIT', 'GNU', 'Apache 2.0', 'ISC'],
    },
    {
        type: "input",
        message: "Please provide a description of your project.",
        name: "Info",
    },
    
])
.then ((Response) => {
    fs.writeFile("README.md", JSON.stringify(Response), (err) => {
        err
        ? console.log(err)
        : console.log("README file has been created!" )
    })
})
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
