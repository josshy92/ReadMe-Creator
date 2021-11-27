// Add inquirer functionality
// Add access to file storage

const inquirer = require('inquirer');
const fs = require('fs');

// Begin the readme generator and all of the input data
// Either pass in data and use dotted notation to refer to the variables or pass in all the individual variables that will be used.
const generateReadme = (data) =>
`# ${data.title}

[![License](https://img.shields.io/badge/License-${data.badges}-blue.svg)](https://opensource.org/licenses/${data.badges})

## Description
 ${data.description}


## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [License](#badges)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}


## Usage
${data.usage}



## Badges
 Check out the badges hosted by [shields.io](https://shields.io/). [![License](https://img.shields.io/badge/License-${data.badges}-blue.svg)](https://opensource.org/licenses/${data.badges})



## How to Contribute
${data.contributions}


## Tests
${data.tests}

## Questions
${data.username} -> https://github.com/${data.username} 

${data.email} -> For further questions, please feel free to contact me @josshy92@gmail.com`;

// Begin prompts for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the Title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Descrition:?',
            name: 'description',
        },
        {
            type: 'list',
            message: 'Choose your license',
            name: 'badges',
            choices: ['MIT', 'Apache_2.0', 'Boost_1.0']
        },
        {
            type: 'input',
            message: 'What are the installation instructions?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What are some examples for use?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'If you created an app or package and would like other developers to contribute it, you can include guidelines for how to do so here.',
            name: 'contributions',
        },
        {
            type: 'input',
            message: 'Tests for the application? Please provide examples on how to run them here.',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'Github User Name:',
            name: 'username',
        },
        {
            type: 'input',
            message: 'Email address:',
            name: 'email',
        },
    ])
    // Then grab the responses and generate a Readme file with all of the saved content.
    .then((response) => {
        console.log(response)
        const readMePageContent = generateReadme(response)

        fs.writeFile('README.md', readMePageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README file!')
        );
    }
    );
