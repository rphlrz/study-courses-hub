import inquirer from 'inquirer';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'username',
      message: 'What is your name? ',
    }
  ])
  .then((answers) => {
    console.log("Hello " + answers.username);
  });