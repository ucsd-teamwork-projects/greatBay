var inquirer = require("inquirer");

main();

function main() {
    inquirer.prompt([{
        name: "mainAction",
        type: "list",
        message: "What would you like to do?",
        choices: ["POST an Item", "BID on an Item", "EXIT"]

    }]).then(answers => {
        console.log(answers.mainAction)
        switch (answers.mainAction) {
            case "POST an Item":
                break;
            case "BID on an Item":
                returnItems()
                break;
            case "EXIT":
                process.exit();
                break;
            default:
                console.log("Error: Invalid Selection");
        }
    });
}

function returnItems() {
    connection.query("SELECT * FROM Item", function(err, res) {
                console.log(res)
                inquirer.prompt([{
                        name: "choice",
                        type: "list",
                        choices: function(value) {
                            var choiceArray = [];
                            for (var i = 0; i < res.length; i++) {
                                choiceArray.push(res[i].name)
                            }
                            return choiceArray;
                        },
                        message: "what auction would you like to bid on?"
                    }.then(function(postres) {

                    })
                })
            }