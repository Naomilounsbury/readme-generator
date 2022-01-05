//so I'm going to need inquirer so i do that first 
const inquirer = require('inquirer');
// const generatePage = require('./src/page-template');
// const { writeFile, copyFile } = require('./utils/generate-site');

const readMeInfo = () => {
//why do I need this return
return inquirer
.prompt([{
    type: 'input',
        name: 'ReadME name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a project name!');
            return false;
          }
        }
},
{
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project (Required)',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('You need to enter a project description!');
        return false;
      }
    }
  },
  {
      //is this the installation of the app?
    type: 'input',
    name: 'installation',
    message: 'Provide the installation for the project (Required)',
    validate: installationInput => {
      if (installationInput) {
        return true;
      } else {
        console.log('You need to enter a project description!');
        return false;
      }
    }
  },   {
      //I don't even know what usage means
    type: 'input',
    name: 'usage',
    message: 'Provide a description of the usage of the project (Required)',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('You need to enter a project description!');
        return false;
      }
    }
  },   {
    type: 'checkbox',
    name: 'license',
    message: 'Please choose any licenses for the project',
    //do I really need validation for this
    validate: licenseInput => {
      if (licenseInput) {
        return true;
      } else {
        console.log('You need to enter a project license!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project (Required)',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('You need to enter a project description!');
        return false;
      }
    }
  },
    //so this is where I get all the user information

  ])

  .then((answers) => {
    // Use user feedback for to generate my readme
  })
  .catch((error) => {
      //wtf is a .isTtyError
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}
readMeInfo()
