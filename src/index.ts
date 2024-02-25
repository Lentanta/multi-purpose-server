import { configServer } from "./configServer";
import "dotenv/config";

const server = configServer({ logger: true });
const PORT = Number(process.env.HOST_PORT) || 3000;

server.listen({ port: PORT })
  .then(() => { console.log(`Server start at port: ${PORT}`) })
  .catch((error) => { console.log(error) });

