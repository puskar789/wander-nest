import { Router } from "express";
import {
  createRoom,
  deleteRoom,
  getRooms,
} from "../controllers/room.controller.js";
import auth from "../middleware/auth.js";

const router = Router();

router.post("/add", auth, createRoom);
router.get("/get", getRooms);
router.delete("/delete/:roomId", auth, deleteRoom);

export default router;
