// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const genMarkdn = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What was your motivation?",
        name: "motive"
    },
    {
        type:'input',
        message:'What is the title of the project?',
        name:'title',
    },
    {
        type:'input',
        message:'what does the project do?',
        name:'description',
    },
    {
        type:'input',
        message:'Does the project have a table of contents?',
        name:'toc',
    },
    {
        type: "input",
        message: "Why did you build this project?",
        name: "reason",
    },
    {
        type: "input",
        message: "What problem does this solve?",
        name: "problem"
    },
    {
        type: "input",
        message:"What did you learn?",
        name: "learn",
    },
    {
        type:"input",
        message: "What makes your project stand out?",
        name: "standout"
    },
    {
        type: "list",
        message: "Which license do you want to choose?",
        name: "license",
        choices: [
            "Apache 2.0 License",
            "Boost Software License 1.0",
            "BSD 3-Clause License",
        ]
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, genMarkdn(data), (err) =>
      err ? console.log(err) : console.log("Sucess!")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers);
        writeToFile("Readme.md",answers)
    })
}

// Function call to initialize app
init();
