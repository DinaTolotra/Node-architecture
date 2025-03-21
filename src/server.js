const app = require("./app");
const dotenv = require("dotenv");
const pool = require("./db");

dotenv.config();

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || "http://localhost";
pool.getConnection().then(conn => {
    console.log("Connexion à la base reussie !");
    conn.release();
}) 
.catch(err => {
    console.log("Erreur de connexion à la base de données: ", err.message);
})


app.listen(PORT, (err) => {
    if (err) console.log(`Error: ${err.message}`);
    else console.log(`Server listening on ${HOST}:${PORT}`);
});
