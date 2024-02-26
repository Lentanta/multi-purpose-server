import { Client, ClientConfig } from "pg";
import "dotenv/config";

const clientConfig: ClientConfig = {
  host: process.env.DB_HOST_SERVER || "localhost",
  port: parseInt(process.env.DB_PORT || "5432"),
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "lambduck_site",
};

const setupDatabase = async () => {
  const client = new Client(clientConfig);
  await client.connect();

  console.log("Creating post table")
  await client.query(`
    CREATE TABLE post(
      id SERIAL PRIMARY KEY,
      title VARCHAR(50),
      content TEXT
    );
  `);

  console.log("Create account table")
  await client.query(`
    CREATE TABLE account(
      id UUID PRIMARY KEY,
      user_name VARCHAR(50),
      password VARCHAR(50)
    );
  `);

  console.log("Create profile table")
  await client.query(`
    CREATE TABLE profile(
      id SERIAL PRIMARY KEY,
      full_name VARCHAR(50),
      account_id UUID REFERENCES account(id) ON DELETE CASCADE
    );
  `)

  await client.end();
};

setupDatabase();
