import { Router } from "express";
import { createRoom } from "../controllers/room.controller.js";
import auth from "../middleware/auth.js";

const router = Router();

router.post("/add", auth, createRoom);

export default router;
