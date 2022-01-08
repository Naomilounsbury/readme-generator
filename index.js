//so I'm going to need inquirer so i do that first 
const inquirer = require('inquirer');
const fs = require('fs')
const path = require('path')
//because we want to use all the functions and so we want to store them in an object and then be able to access them later so need {}
//if I want to do multiple exports with the same 
const generateMarkdown = require('./utils/generate-markdown.js');

// const { writeFile, copyFile } = require('./utils/generate-site');
// array of questions for user



const questions = [
  // TODO: Include packages needed for this application
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'title',
    message: "What is your project's name?",
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please give a short description of your project',
  },
  //I dont even know about licenses 
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'Mozilla Public License','GPL v3', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should be run for dependencies?',
    default: 'npm i',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command should be run to run tests?',
    default: 'npm test',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repo?',
  },
];





// TODO: Create a function to write README file
//write the write tofunction
function writeToFile(filename, data) { 
  //const data = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile(filename, data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
}


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((data) => {
      console.log(data)
      //the first paramenter is readme because we pass in our filename as a string because write tofile will always be writing a readme I should
      //probably hardcode readme.md into wriotetofile
      //we want to use generate markdown to reformat answers into the string that we want to write to the file
      writeToFile('README.md', generateMarkdown({...data}))
      //use the wrteto file function, answers will be one of my parameters, generatemarkdown will be another parameter
    })
}
//why do people use single quotes and not double quotes 




// function call to initialize program
// Function call to initialize app
init();

