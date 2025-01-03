import nodemailer from "nodemailer";
import OTP from "../models/otp.model.js";
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

const generateOtp = () => 100000 + Math.floor(Math.random() * 900000);

export const getOtp = async (req, res) => {
  try {
    const { email } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const otp = generateOtp();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "OTP Verification for Wander Nest",
      text: `Your OTP is: ${otp}`,
    });

    const hashedOtp = await bcrypt.hash(otp.toString(), 12);

    const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes
    await OTP.create({ email, otp: hashedOtp, expiresAt });
    res.status(200).json({ success: true, result: email });
  } catch (error) {
    console.log("error in otp controller getOtp", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong try again later",
    });
  }
};

export const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const storedOtp = await OTP.findOne({ email });

    if (!storedOtp) {
      return res
        .status(404)
        .json({ success: false, message: "OTP not found or expired" });
    }

    const isOtpCorrect = await bcrypt.compare(otp, storedOtp.otp);

    await OTP.findByIdAndDelete(storedOtp._id);

    if (!isOtpCorrect) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    if (Date.now() > storedOtp.expiresAt) {
      return res.status(400).json({ success: false, message: "OTP expired" });
    }

    res
      .status(200)
      .json({ success: true, message: "OTP verified successfully" });
  } catch (error) {
    console.log("error in otp controller verifyOtp", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong try again later",
    });
  }
};
