import { Router } from "express";
import { createRoom } from "../controllers/room.js";
import auth from "../middleware/auth.js";

const router = Router();

router.post("/", auth, createRoom);

export default router;
