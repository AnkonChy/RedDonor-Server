import express from "express";
import { addUser, getAllUser } from "../controllers/userController.js";
const router = express.Router();

router.post("/add", addUser);

router.get("/users", getAllUser);

export default router;
