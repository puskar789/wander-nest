import express from "express";
import dotenv from "dotenv";
import roomRouter from "./routes/room.router.js";
import userRouter from "./routes/user.router.js";
import otpRouter from "./routes/otp.router.js";
import mongoose from "mongoose";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

// middleware to allow cross site access
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", process.env.CLIENT_URL);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,Content-Type,Authorization"
  );
  next();
});

// limit is used to prevent DDoS attacks
app.use(express.json({ limit: "10mb" }));

app.use("/api/user", userRouter);
app.use("/api/room", roomRouter);
app.use("/api/otp", otpRouter);

// welcome message
app.get("/api", (req, res) => res.json({ message: "Welcome to our API" }));
// any other URL is being accessed
app.use((req, res) =>
  res.status(404).json({ success: false, message: "Not Found" })
);

app.listen(port, async () => {
  await mongoose.connect(process.env.MONGO_CONNECT);
  console.log("Connected to MongoDB");
  console.log(`Server is running on port ${port}`);
});
