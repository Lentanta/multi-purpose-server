import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import notesRouter from "./notes";

dotenv.config();

const app: Express = express();
const port = process.env.HOST_PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', async (_: Request, res: Response) => {
  res.send("HELLO, THIS SERVER IS RUNNING")
});


app.use("/api/notes", notesRouter)

app.get("/reset-database", async (_: Request, res: Response) => {
  try {
    await sql`DROP TABLE IF EXISTS note`;
    await sql`
      CREATE TABLE note (
        id UUID PRIMARY KEY,
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

