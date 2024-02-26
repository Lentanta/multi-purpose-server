import { FastifyReply, FastifyRequest } from "fastify";
import { pool } from "../../database/postgres";

export const getAllPosts = async (_: FastifyRequest, rep: FastifyReply) => {
  const result = await pool.query("SELECT * FROM post");
  rep.send({
    data: result.rows
  })
};

export const createOnePost = async (req: FastifyRequest, rep: FastifyReply) => {
  const { title, content } = req.body as any;

  const query = {
    name: "add-one-post",
    text: "INSERT INTO post(id, title, content) VALUES(DEFAULT, $1, $2)",
    values: [title, content]
  };

  await pool.query(query);
  rep.code(200);
  rep.send({
    body: req.body,
    mesage: "Create success"
  });
}

export const updateOnePost = () => { };

export const deleteOnePost = () => { };
