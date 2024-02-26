import { Pool } from "pg";
import "dotenv/config";

export const pool = new Pool({
  host: process.env.DB_HOST_SERVER || "localhost",
  port: parseInt(process.env.DB_PORT || "5432"),
  user: process.env.DB_USER || "postgres",
  database: process.env.DB_NAME || "lambduck_site",
  password: process.env.DB_PASSWORD || ""
});
