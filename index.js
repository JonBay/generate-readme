const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'Title',
        choices: ['email', 'phone', 'telekinesis'],
      },
    {
      type: 'input',
      name: 'description',
      message: 'What is your name?',
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'TableofContents',
      choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'Installation',
      choices: ['email', 'phone', 'telekinesis'],
    },
    {
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'Usage',
        choices: ['email', 'phone', 'telekinesis'],
      },
      {
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'License',
        choices: ['email', 'phone', 'telekinesis'],
      }, 
      {
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'Contributing',
        choices: ['email', 'phone', 'telekinesis'],
      },    
      {
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'Tests',
        choices: ['email', 'phone', 'telekinesis'],
      },
      {
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'Questions',
        choices: ['email', 'phone', 'telekinesis'],
      },
  ])
  .then((data) => {
    fs.writeFile('README.md', JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });


