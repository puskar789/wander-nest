import { Router } from "express";
import { createRoom, getRooms } from "../controllers/room.controller.js";
import auth from "../middleware/auth.js";

const router = Router();

router.post("/add", auth, createRoom);
router.get("/get", getRooms);

export default router;
