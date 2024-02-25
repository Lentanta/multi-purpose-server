import { Client } from "pg";
import "dotenv/config";

const setupDatabase = async () => {
  const client = new Client({
    host: process.env.DB_HOST_SERVER || "localhost",
    port: parseInt(process.env.DB_PORT || "5432"),
    user: process.env.DB_USER || "postgres",
    database: process.env.DB_NAME || "lambduck_site",
    password: process.env.DB_PASSWORD || ""
  });

  await client.connect();

  await client.query(
    `CREATE TABLE post(
      id INTEGER PRIMARY KEY,
      title VARCHAR(50),
      content TEXT
    );`);

  await client.end();
};

setupDatabase();
