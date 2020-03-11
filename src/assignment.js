// const CLI = require('clui');
// const Spinner = CLI.Spinner;
// const fs = require('fs');
// const touch = require("touch");
const createCsvWriter = require('csv-writer').createArrayCsvWriter;
const path = require('path')
const chalk = require('chalk')



module.exports = {

    upperCase: (inputText) => {
        return inputText.toUpperCase();
    },

    camelCase: (inputText) => {
        let result = '';
        var inputArray = inputText.split('');
        for (let i = 1; i <= inputArray.length; i++) {
            let char = inputArray[i-1];
            let tempOutput = '';
            if (i != 0 &&  i % 2 == 0 ) {
                tempOutput = char.toUpperCase();
            } else {
                tempOutput = char.toLowerCase(); 
            }
            result += tempOutput;
        }
        return result;
       
    },

    csv: (inputText) => {
        let fileName = 'csv_output_' + new Date().getTime() + '.csv'; 
        
        let inputArray = inputText.split('');
       
        let csvpath = path.join(process.env.HOME, fileName);
        const csvWriter = createCsvWriter({
            path: csvpath,
            alwaysQuote : true
        });

        const records = [
            inputArray
        ];
        csvWriter.writeRecords(records) 
            .then(() => {
                console.log(chalk.green.bold('CSV Created!') + " (location " + csvpath + " )");
            
        });
        
       
        
    }
}