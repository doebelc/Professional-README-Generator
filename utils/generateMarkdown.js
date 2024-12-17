// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  const licenseBadges = {
    'MIT License': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Apache License 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    'The Unlicense': 'https://img.shields.io/badge/license-Unlicense-blue.svg',
    'Eclipse Public License 2.0': 'https://img.shields.io/badge/License-EPL%201.0-red.svg',
  };

  return licenseBadges[license];
}




// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  const licenseLinks = {
    'MIT License': 'https://opensource.org/licenses/MIT',
    'Apache License 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'The Unlicense': 'http://unlicense.org/',
    'Eclipse Public License 2.0': 'https://opensource.org/licenses/EPL-2.0',
  };

  return licenseLinks[license];
}





// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `## License\nThis project is licensed under the ${license} license.`;
}






// TODO: Create a function to generate markdown for README



function generateMarkdown(data) {

  // Need license badge and section
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);
  const licenseLink = renderLicenseLink(data.license);



  const tableOfContents = `
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)
`;



  return `
  # ${data.title}

  ${licenseBadge ? `![License Badge](${licenseBadge})` : ''}

  ## Description
  ${data.description}

  ## Table of Contents
  ${tableOfContents}

  ## Installation
  To install the necesary dependencies, run the following command:

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contribution
  ${data.contribution}

  ## Tests
  To run tests, run the following command:

  \`\`\`
  ${data.tests}
  \`\`\`

  ## Questions
  If you have any questions, please reach out to me at ${data.email}.

  You can also find me on GitHub at [${data.github}](https://github.com/doebelc${data.github}).
  `;
}

export default generateMarkdown;
