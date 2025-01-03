import { Router } from "express";
import { getOtp, verifyOtp } from "../controllers/otp.controller.js";

const router = Router();

router.post("/get-otp", getOtp);
router.post("/verify-otp", verifyOtp);

export default router;
