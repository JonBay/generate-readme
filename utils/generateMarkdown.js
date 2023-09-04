//function that returns a license badge based on which license is passed in
//If there is no license, return an empty string

function renderLicenseBadge(license) 
  {
    if (!license)
      {
        return '';
      }

    const licenseBadge = 
      {
        'Apache License 2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        'Boost Software License 1.0': '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
        'MIT License': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        'Mozilla Public License 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
        'GNU General Public License v3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
      }
  
    return licenseBadge[license] || '';
  }

//function that returns the license link
//If there is no license, return an empty string
function renderLicenseLink(license)
  {
    if(!license)
      {
        return '';
      }

    const licenseLink = 
      {
        'Apache License 2.0': 'https://choosealicense.com/licenses/apache-2.0/',
        'Boost Software License 1.0': 'https://choosealicense.com/licenses/bsl-1.0/',
        'MIT License': 'https://choosealicense.com/licenses/mit/',
        'Mozilla Public License 2.0': 'https://choosealicense.com/licenses/mpl-2.0/',
        'GNU General Public License v3.0': 'https://choosealicense.com/licenses/gpl-3.0/'
      }
    return licenseLink[license] || '';
  }

//function that returns the license section of README
//If there is no license, return an empty string
function renderLicenseSection(license) 
  {
    if(!license)
      {
        return '';
      }

    return `## License
    
    Licensed under the [${license}]
    for more information about the license see ${renderLicenseLink(license)} 
    `

  }


//function to generate markdown for README
function generateMarkdown(data) 
  {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation} 

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  https://github.com/${data.username}
  For questions about this project you can reach out to ${data.email}.`;
  }

  module.exports = generateMarkdown;
