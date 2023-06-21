import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { sql } from "./postgres";

dotenv.config();

const app: Express = express();
const port = process.env.HOST_PORT;

app.get('/', async (_: Request, res: Response) => {
  res.send("HELLO, IS SERVER IS RUNNING")
});

app.get("/reset-database", async (_: Request, res: Response) => {
  try {
    await sql`DROP TABLE IF EXISTS note`;
    await sql`
      CREATE TABLE note (
        id SERIAL PRIMARY KEY,
        content TEXT
      )`;
    res.send("Reset database success")
  } catch (error) {
    res.send("ERROR: " + error)
  }
})

app.get('/notes', async (_: Request, res: Response) => {
  try {
    const noteData = await sql`SELECT * FROM note`;
    res.send(noteData);
  } catch (error) {
    res.send("ERROR: " + error)
  }
});

app.post('/note', async (req: Request, res: Response) => {
  try {
    console.log(req);
  } catch (error) {
    res.send("ERROR: " + error)
  }
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`)
});

