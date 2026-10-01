const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
app.use(express.json());
app.use(cors());
app.post('/order',
    (req, res) => {
        fs.appendFile('order.txt', `${JSON.stringify(req.body)}\n`,
            (error) => {
            }
        );
        console.log(req.body);
        res.send(`Order Taken<br>Refresh the page to go home page`);
    }
)

app.listen(3000,
    () => {
        console.log("Server is running...")
    }
)