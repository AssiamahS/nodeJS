// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, err => {
        if(err) {
        console.error(err);
        return;
        
    }
    console.log("README file generated successfully");
});
}
// TODO: Create a function to initialize app
function init() {
 inquirer.prompt(questions)
  .then(answers => {
    const markdown = generateMarkdown(answers);
    writeToFile("README.md", markdown);
      
  })
  .catch(error => {
    console.error('Error occured during initialization', error);
  })
  }
// Function call to initialize app
init();
