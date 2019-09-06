var inquirer = require("inquirer");



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
                postItem();
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

function postItem(){
    inquirer.prompt([
        {
            name: "itemName",
            type: "input",
            message: "What is the name of the item you are trying to sell? "
        },
        {
            name: "itemCategory",
            type: "list",
            message: "",
            choices: ["Electronics", "Home Goods"]
        },
        {
            name: "itemStartBid",
            type: "input",
            message: "What is the starting bid?"
        }
    ]).then(answers => {
        postItemToDB(answers.itemName, answers.itemCategory, answers.itemStartBid);
    });
}

function postItemToDB(name, cat, initBid){
    connection.connect(err => {
        if(err) throw err;
        connection.query(
            "INSERT INTO [DB NAME] SET ?",
            {
                item_name: name,
                item_category: cat,
                starting_bid: initBid
            },
            function(err){
                if (err) throw err;
            }
        );
    });
   
}

function userSignIn(){

}