import { FastifyInstance } from "fastify";
import { getAllPosts } from "./controllers";

export const postRoutes = async (fastify: FastifyInstance) => {
  fastify.route({
    method: "GET",
    url: "/",
    handler: getAllPosts
  });
};



