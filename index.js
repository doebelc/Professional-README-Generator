// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [

    // inquirer
    //     .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Calender Editor',
    },
    {
        type: 'input',
        name: 'description',
        message: 'This project is a calender editor that allows you to add and delete events on a calender. Your able to move events around and save them to a database.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'npm install',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'To use this project, you must first install the dependencies. Once the dependencies are installed, you can run the project by running the following command: node index.js',
    },
    {
        type: 'list',
        name: 'license',
        message: 'The license chosen for this project is MIT License',
        choices: ['MIT License', 'Apache Lisence 2.0', 'The Unlisence', 'Eclipse Public Lisence 2.0'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Cory',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can users test this project?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address for questions',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
    }
];
inquirer.prompt(questions)
    .then(answers => {
        const markdownContent = generateMarkdown(answers);

        // Write the README content to a file
        fs.writeFile('README.md', markdownContent, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('File written successfully');
            };
        });
    });


// .then((answers) => {
//         const markdown = generateMarkdown(answers);

//         fs.writeFile('README.md', markdown, (err) =>
//             err ? console.log(err) : console.log('Successfully created README.md!')
//         );
//     });

// TODO: Create a function to write README file
// function writeToFile('README.md', data) {

const writeToLog = (data) => {
    fs.writeFile('README.md', data, (err) => {
        err ? console.error(err) : console.log(`README.md has been created successfully!`)
    });
}

// TODO: Create a function to initialize app
function init() {
    console.log('Welcome to the Calander Editor!');


    inquirer.prompt(questions)
        .then((answers) => {
            const markdownContent = generateMarkdown(answers);

            writeToFile('README.md', markdownContent, (err) =>
                err ? console.log(err) : console.log('Successfully created README.md!')
            );
        });



    promptUser();
}

// Function call to initialize app
init();
