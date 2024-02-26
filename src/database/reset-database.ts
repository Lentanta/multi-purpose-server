import { Client, ClientConfig } from "pg";
import "dotenv/config";

const clientConfig: ClientConfig = {
  host: process.env.DB_HOST_SERVER || "localhost",
  port: parseInt(process.env.DB_PORT || "5432"),
  user: process.env.DB_USER || "postgres",
  database: process.env.DB_NAME || "postgres",
  password: process.env.DB_PASSWORD || ""
};

const resetDatabase = async () => {
  const client = new Client(clientConfig);
  await client.connect();

  console.log("Get database")
  const result = await client.query(`
    SELECT datname FROM pg_database 
    WHERE datname = 'lambduck_site';`
  );

  if (result.rowCount !== 0) {
    console.log("Dropping database")
    await client.query("DROP DATABASE lambduck_site;");
  };

  await client.query("CREATE DATABASE lambduck_site;")
  await client.end();
};

resetDatabase();
