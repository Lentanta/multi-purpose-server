import { Router, Express, Request, Response } from "express";
import { sql } from "../postgres";
import { first } from "lodash";
import { v4 as generateUUID } from 'uuid';

export const getAllNotes = async (_: Request, res: Response) => {
  try {
    const allNotes = await sql`SELECT * FROM notes`;

    return res.status(200).json(allNotes);
  } catch (error) {
    return res.send("ERROR: " + error)
  }
};

export const createOneNote = async (req: Request, res: Response) => {
  try {
    const defaultRequestValue = { type: "", content: "" };
    const requestBody = req.body || defaultRequestValue;
    const { type, content } = requestBody;

    const uuid = generateUUID();

    const createdNote = await sql`
      INSERT INTO notes (id, type, content) 
      VALUES (${uuid}, ${type}, ${content})
      RETURNING id, type, content
    `;

    return res.status(200).json(first(createdNote));
  } catch (error) {
    console.log(error)
    return res.send("ERROR: " + error)
  }
};

export const deleteOneNote = async (req: Request, res: Response) => {
  try {
    const defaultRequestValue = { noteId: "" };
    const { noteId } = req.params || defaultRequestValue;

    await sql`
      DELETE FROM notes 
      WHERE id=${noteId};
    `;

    return res.status(200).send("Delete success");
  } catch (error) {
    return res.send("ERROR: " + error)
  }
}
