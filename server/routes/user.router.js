import express from "express";
import {
  login,
  register,
  updateProfile,
} from "../controllers/user.controller.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.patch("/update", auth, updateProfile);

export default router;
