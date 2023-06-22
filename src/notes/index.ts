import { Router, Express, Request, Response } from "express";
import {
  getAllNotes,
  createOneNote,
  deleteOneNote
} from "./controller";

const router = Router();

router.route("/").get(getAllNotes);
router.route("/").post(createOneNote);
router.route("/:noteId").delete(deleteOneNote);

export default router;