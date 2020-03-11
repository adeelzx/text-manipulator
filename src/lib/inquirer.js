const inquirer = require('inquirer');


module.exports = {

    assignment: () => {
        const questions = [
          {
            name: 'inputText',
            type: 'input',
            message: 'Enter a text.',
            validate: function( value ) {
              if (value.length) {
                return true;
              } else {
                return 'Please enter a valid Text.';
              }
            }
          },
          {
            type: 'list',
            name: 'Assignment',
            message: 'Choose Assignment:',
            choices: [ 'Upper Case', 'Camel Case', 'CSV' ],
            default: 'public'
          }
          
        ];
        return inquirer.prompt(questions);
      },
}