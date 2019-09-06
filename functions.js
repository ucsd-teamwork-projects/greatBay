var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Ymcninja9810308991$",
    database: "greatbay"

});

function addItem(title, price) {
    console.log(`Adding ${title} to the auction!`)
    var query = connection.query(
        "INSERT INTO auction_items SET ?", {
            title: name,
            start_price: price,
            curr_price: price
            // op: curr_user,
            // curr_winner: "no one yet."
        },
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " items posted!\n");
        }
    )

}


function bidItem(name, bid_price) {
    connection.query(`SELECT * FROM auction_items WHERE ${title} = "${name}`, function (err, res) {
        if (err) throw err;
        if (res[0].curr_price < bid_price) {
            updateItemPrice(name, bid_price);
        } else {
            console.log("Sorry, your bid was not high enough. Please try again.");
        }
    });

}

function updateItemPrice(name, bid_price) {
    connection.query(`UPDATE auction_items SET ? WHERE ?`,
        [{
                curr_price: bid_price
            },
            {
                title: name
            }
        ],
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " auction(s) updated!\n");
        })

}

function exit() {
    process.exit();
}