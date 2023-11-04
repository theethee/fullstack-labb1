const express = require("express"),
  path = require("path");

const app = express();

// Importerar dotenv och pg
const dotenv = require("dotenv"),
  { Client } = require("pg");

// Hämtar PGURI
dotenv.config();

// Ansluter till PostgreSQL
// client.query används för att interagera med databasen
const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();

// endpoint produkter
app.get("/api", async (_request, response) => {
  const { rows } = await client.query("SELECT * FROM beauty_products");

  response.send(rows);
});

app.use(express.static(path.join(path.resolve(), "public")));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`);
});
