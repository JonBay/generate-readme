const inquirer = require('inquirer');
const fs = require('fs');
const generatemarkdown = require('./utils/generateMarkdown');

const questions =
[
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
      },
    {
      type: 'input',
      name: 'description',
      message: 'Give a brief description of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the instructions for installing your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples of use for this project.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license will you be using?',
      choices: ['Apache License 2.0','Boost Software License 1.0','MIT License','Mozilla Public License 2.0','GNU General Public License v3.0'],
    }, 
    {
      type: 'input',
      name: 'contributing',
      message: 'List the git hub username of any contributors.  If none leave blank.',
    },    
    {
      type: 'input',
      name: 'tests',
      message: 'List any test instructions.',
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your e-mail address?',
    },
  ]



// function to write README file
function writeToFile(fileName, data) 
  {
    fs.writeFile(fileName, data, (err) =>
      {
        if(err)
          {
            console.error(err);
          }
        else
          {
            console.log('File was created successfully!');
          }  
      });
  }

// function to ask questions and run generatemarkdown
function init() 
  {
    inquirer
      .prompt(questions)
      .then((response) => 
        {
          const questionResponses = generatemarkdown(response);
          writeToFile('README.md', questionResponses);
        })
        .catch((err) =>
          {
            console.error(err);
          });
  }

//initilize app
init();
