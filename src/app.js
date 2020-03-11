
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('./lib/inquirer');
const assignment = require('./assignment');

clear();

console.log(
  chalk.yellow(
    figlet.textSync('iPrice Assignment', { horizontalLayout: 'full' })
  )
);

const run = async () => {
    const question = await inquirer.assignment();
   
    const operation = question['Assignment'];

    let output;
    switch (operation) {
        
        case "Upper Case":
            output = assignment.upperCase(question['inputText'])
            console.log(output)
            break;
        case "Camel Case":
            output =  assignment.camelCase(question['inputText'])
            console.log(output)
            break;
        
        case "CSV":
            assignment.csv(question['inputText'])
            break;
            
    }
    
  };
  
run();