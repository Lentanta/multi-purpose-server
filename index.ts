import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { sql } from "./postgres";

dotenv.config();

const app: Express = express();
const port = process.env.HOST_PORT;

app.get('/notes', async (_: Request, res: Response) => {
  const noteData = await sql`SELECT * FROM note`;
  res.send(noteData);
});

app.listen(port, () => {
  console.log("SERVER IS RUNNING AT http://localhost:2727")
});

