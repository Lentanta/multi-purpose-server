import { FastifyReply, FastifyRequest } from "fastify";
import { pool } from "../../database/postgres";
import { v4 as generateUUID } from 'uuid';

export const getAllPosts = async (_: FastifyRequest, rep: FastifyReply) => {
  await rep.sendFile("index.html")
};

export const addOnePost = async (req: FastifyRequest, rep: FastifyReply) => {

  const query = {
    name: "add-one-post",
    text: "INSERT INTO post(id, title, content) VALUES($1, $2)",
    value: []
  };
}

export const updateOnePost = () => { };

export const deleteOnePost = () => { };
