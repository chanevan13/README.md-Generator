const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = ({ projectTitle, description, installation, usage, credits, license,tests, emailQuestions }) =>
  
`# <${projectTitle}>

## Description
${description}


## Installation
${installation}


## Usage
${usage}


## Credits
${credits}


## Tests
${tests}


## License
${license}

## Questions
### Any questions? Please email me at ${emailQuestions}
`



inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a short description explaining the what, why, and how of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your projects? Provide a step-by-step description of how to get the development environemnt running',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use. Include screenshots as needed.',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Provide a list of collaborators with links to their GitHub profiles.',
    },
    {
        type:'input',
        name:'tests',
        message:'If applicable, provide any tests written for your application and provide example on how to run them.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please provide a license for your project',
      choices: ['GNU AGPLv3', 'GNU GPLv3','Mozilla Publc License 2.0','Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    },
    {
        type: 'input',
        name:'emailQuestions',
        message:'Please provide a valid email for any contact'
    }

    
  ])
  .then((answers) => {
    const Readme = generateReadme(answers);
    fs.writeFile('README.md', Readme, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md')
    );
  });
