import { FastifyReply, FastifyRequest } from "fastify";
import { pool } from "../../database/postgres";
import { v4 as generateUUID } from 'uuid';

export const getFiles = async (_: FastifyRequest, rep: FastifyReply) => {
  rep.code(200);
  rep.send();
};
