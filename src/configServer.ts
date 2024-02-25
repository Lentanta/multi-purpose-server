import Fastify, { FastifyServerOptions } from "fastify";
import { postRoutes } from "./api/post/routes";
import fastifyStatic from "@fastify/static";
import path from "path";

export const configServer = (opts: FastifyServerOptions) => {
  const server = Fastify(opts);

  server.register(fastifyStatic, {
    root: path.join(__dirname, "public"),
  });

  server.register(postRoutes, { prefix: "/api/posts" });
  server.get("/", () => "Server working normal");

  return server;
};
