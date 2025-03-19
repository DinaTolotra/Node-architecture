const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || "localhost";

app.use((req, res) => {
    res.send("Hello from server!");
});

app.listen(PORT, (err) => {
    if (err) console.log(`Error: err.message ${err.message}`);
    else console.log(`Server listening on ${HOST}:${PORT}`);
});
