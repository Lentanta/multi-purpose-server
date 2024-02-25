import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import notesRouter from "./notes";
import { sql } from "./postgres";

import cors from "cors";
import dotenv from "dotenv";

import { sql } from "./postgres";


import notesRouter from "./notes";

dotenv.config();

const app: Express = express();
const port = process.env.HOST_PORT;

app.use(cors({ origin: "*" }))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', async (_: Request, res: Response) => {
  res.send("HELLO, THIS SERVER IS RUNNING")
  res.sendFile(__dirname + "/resources/index.html")
});


app.use("/api/notes", notesRouter)

app.get("/query/:sqlQuery", async (req: Request, res: Response) => {
  const { sqlQuery } = req.params;
  try {
    const notes = await sql.unsafe(sqlQuery);
    console.log(notes)
    res.send("Reset database success")
  } catch (error) {
    res.send("ERROR: " + error)
  }
})

app.get("/reset-database", async (_: Request, res: Response) => {
  try {
    await sql`DROP TABLE IF EXISTS notes`;
    await sql`
      CREATE TABLE notes (
        id UUID PRIMARY KEY,
        type TEXT,
        content TEXT
      )`;
    res.send("Reset database success")
  } catch (error) {
    res.send("ERROR: " + error)
  }
})

app.listen(port, () => {
  console.log(`Server is running at ${port}`)
});

