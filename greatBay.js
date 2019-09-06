var inquirer = require("inquirer");

main();

function main(){
    inquirer([
        {
            name: "mainAction",
            type: "list",
            message: "What would you like to do?",
            choices: ["POST an Item", "BID on an Item", "EXIT"]

        }
    ]).then(answers => {
        switch(answers.mainAction){
            case "Post an Item":
                console.log("TEST")
                break;
            case "BID on an Item":
                break;
            case "EXIT":
                break;
            default:
                console.log("Error: Invalid Selection");
        }
    });
}