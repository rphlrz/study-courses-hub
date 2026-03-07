import inquirer from 'inquirer';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'username',
      message: 'What is your name? ',
    },
    {
      type: 'list',
      name: 'ageRange',
      message: 'What is your age range? ',
      choices: [
        '29 a 39',
        '40 a 50',
        '50+'
      ]
    }
  ])
  .then((answers) => {
    console.log("Hello " + answers.username + " with " + answers.ageRange + " years :D");
  });