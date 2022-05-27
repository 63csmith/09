// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = () =>
inquirer.prompt([
    {
        type: "input",
        message: "What is the name of your project?",
        name: "Project",
        validate: ProjectInput => {
            if (ProjectInput) {
                return true;
            } else {
                console.log("Enter your project name.");
                return false;
            }
        }
    },
    {
        type: "input",
        message: "Please enter your GitHub username.",
        name: "GitHub",
        validate: GitHubInput => {
            if (GitHubInput) {
                return true;
            } else {
                console.log("Please provide your GitHub username.");
                return false;
            }
        }
    },
    {
        type: "input",
        message: "Please enter your Email address.",
        name: "Email",
        validate: EmailInput => {
            if (EmailInput) {
                return true;
            } else {
                console.log("Provide your email address please.")
                return false;
            }
        }
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
        validate: InfoInput => {
            if (InfoInput) {
                return true;
            } else {
                console.log("Give a description of your app/project.")
                return false;
            }
        }
    },

])

// TODO: Create a function to write README file
function writeToFile(ProjectInput, data) {
    fs.appendFile(`${ProjectInput}.md`, data, 
    (err) => err ? console.error(err) : console.log('README.md has been generated.'))
}

// TODO: Create a function to initialize app
function init() {
    let answers = questions();
    writeToFile((answers.ProjectInput),(generate(answers)));
}

// Function call to initialize app
init();
