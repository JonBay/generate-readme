const inquirer = require('inquirer');
const fs = require('fs');
const generatemarkdown = require('./utils/generateMarkdown');

//call .prompt later.  For now just put the const questions in an array.  
inquirer
  .prompt([
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?'
      },
    {
      type: 'input',
      name: 'Description',
      message: 'Give a brief description of your project.',
    },
    // {  this one will just be generated in the file.  
    //   type: 'checkbox',
    //   message: 'What languages do you know?',
    //   name: 'TableofContents',
    //   choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    // },
    {
      type: 'input',
      name: 'Installation',
      message: 'What are the instructions for installing your project?',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'Provide instructions and examples of use for this project.',
    },
    {
      type: 'list',
      name: 'License',
      message: 'What license will you be using?',
      choices: ['MIT', 'OtherLicenseA', 'OtherLicenseB'],
    }, 
    {
      type: 'input',
      name: 'Contributing',
      message: 'List the git hub username of any contributors.  If none leave blank.',
    },    
    {
      type: 'list',
      name: 'Tests',
      message: 'List any test instructions.',
    },
    {
      type: 'input',
      name: 'Username',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'Email',
      message: 'What is your e-mail address?',
    },
  ])
  .then((data) => {
    fs.writeFile('README.md', (generatemarkdown), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });



// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
