// function to generate markdown for README
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case 'Mozilla Public License':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    case 'GPL v3':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    case 'APACHE 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case 'BSD 3':
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    default:
      return 'None'

  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    //\n creates a new line in markdown, if you dont have a double space itll be considered the same line 
   
    return `* [License](#license)`
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {

    //new line in the terminal makes it so 
    return `This is licensed under ${license}`
  }
  return ""
}

// TODO: Create a function to generate markdown for README
// this was weirdly easy, I did have to look up how to write a readme because I dont ever do that right
function generateMarkdown(data) {

  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Table of Contents
  * [Description](#description)
  ${renderLicenseLink(data.license)}

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Questions](#questions)
  ## Description
  ${data.description}
  ![screenshot](${data.screenshot})
  ## License
  ${data.license}
  ${renderLicenseSection(data.license)}
  ## Installation
  ${data.installation}
  ## Usage 
  ${data.usage}
  ## Contributing
  ${data.contributing}
  ## Questions
  Github: [${data.github}](https://github.com/${data.github})
  Email: ${data.email}
  `
}

module.exports = generateMarkdown;
