import express from "express";
import {
  createPerson,
  deletePerson,
  readPersons,
  updatePerson,
} from "../controller/controller.js";

const router = express.Router();

router.get("/", readPersons);
router.post("/", createPerson);
router.patch("/:id", updatePerson);
router.delete("/:id", deletePerson);

export default router;
