import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.HOST_PORT;

app.get('/', async (_: Request, res: Response) => {
  res.send("HELLO, THIS SERVER IS RUNNING")
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`)
});

