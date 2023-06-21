import postgres from 'postgres'

const postgresOptions: postgres.Options<{}> = {
  host: process.env.DB_HOST_SERVER || "none",
  port: parseInt(process.env.DB_PORT || "5432"),
  user: process.env.DB_USER || "none",
  database: process.env.DB_NAME || "none",
  password: process.env.DB_PASSWORD || "none"
}

export const sql = postgres(postgresOptions);