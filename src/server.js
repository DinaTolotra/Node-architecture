const app = require("./app");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || "http://localhost";

app.listen(PORT, (err) => {
    if (err) console.log(`Error: ${err.message}`);
    else console.log(`Server listening on ${HOST}:${PORT}`);
});
