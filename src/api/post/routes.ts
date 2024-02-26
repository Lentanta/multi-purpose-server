import { FastifyInstance } from "fastify";
import { getAllPosts, createOnePost } from "./controllers";

export const postRoutes = async (fastify: FastifyInstance) => {
  fastify.route({
    method: "GET",
    url: "/",
    handler: getAllPosts
  });

  fastify.route({
    method: "POST",
    url: "/",
    handler: createOnePost
  });
};



