import { Router, Express, Request, Response } from "express";
import { sql } from "../postgres";
import { first } from "lodash";
import { v4 as generateUUID } from 'uuid';

export const getAllNotes = async (_: Request, res: Response) => {
  try {
    const allNotes = await sql`SELECT * FROM note`;

    return res.status(200).json(allNotes);
  } catch (error) {
    return res.send("ERROR: " + error)
  }
};

export const createOneNote = async (req: Request, res: Response) => {
  try {
    const defaultRequestValue = { content: "" };
    const requestBody = first<{ content: string }>(req.body)
      || defaultRequestValue;

    const { content } = requestBody;
    const uuid = generateUUID();

    const createdNote = await sql`
      INSERT INTO note (id,content) 
      VALUES (${uuid},${content})
      RETURNING id,content
    `;

    return res.status(200).json(first(createdNote));
  } catch (error) {
    return res.send("ERROR: " + error)
  }
};

export const deleteOneNote = async (req: Request, res: Response) => {
  try {
    const defaultRequestValue = { noteId: "" };
    const { noteId } = req.params || defaultRequestValue;

    await sql`
      DELETE FROM note 
      WHERE id=${noteId};
    `;

    return res.status(200).send("Delete success");
  } catch (error) {
    return res.send("ERROR: " + error)
  }
}