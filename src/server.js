const {host, port} = require("./config/env");
const app = require("./app");

app.listen(port, (err) => {
    if (err) console.log(`Error: ${err.message}`);
    else console.log(`Server listening on ${host}:${port}`);
});
