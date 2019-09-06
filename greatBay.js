var inquirer = require("inquirer");

main();

function main(){
    inquirer.prompt([
        {
            name: "mainAction",
            type: "list",
            message: "What would you like to do?",
            choices: ["POST an Item", "BID on an Item", "EXIT"]

        }
    ]).then(answers => {
        console.log(answers.mainAction)
        switch(answers.mainAction){
            case "POST an Item":
                console.log("TEST")
                break;
            case "BID on an Item":
                break;
            case "EXIT":
                process.exit();
                break;
            default:
                console.log("Error: Invalid Selection");
        }
    });
}