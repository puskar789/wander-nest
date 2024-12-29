import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Room from "../models/room.model.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters.",
      });
    }

    // const emailLowerCase = email.toLowerCase();
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    if (user) {
      const { _id: id, photoURL, isAdmin } = user;
      // these fields are required to be added along with the room records
      const token = jwt.sign({ id, name, photoURL }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      res.status(201).json({
        success: true,
        result: { id, name, email, isAdmin, photoURL, token },
      });
    }
  } catch (error) {
    console.log("error in user controller register", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong try again later",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "User does not exist",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const { _id: id, name, photoURL, isAdmin } = existingUser;
    const token = jwt.sign({ id, name, photoURL }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      success: true,
      result: { id, name, email, isAdmin, photoURL, token },
    });
  } catch (error) {
    console.log("error in user controller login", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong try again later",
    });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { name: req.body.newName, photoURL: req.body.newPhotoURL },
      {
        new: true,
      }
    );

    const { _id: id, name, photoURL } = updatedUser;
    // console.log(id, name, photoURL);

    // needed as if user adds a room and then updates his profile, the room's user name and photoURL should be updated
    await Room.updateMany(
      { userId: id },
      { userName: name, userPhoto: photoURL }
    );

    const token = jwt.sign({ id, name, photoURL }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ success: true, result: { name, photoURL, token } });
  } catch (error) {
    console.log("error in user controller updateProfile", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong try again later",
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password").sort({ _id: -1 });
    if (users) {
      res.status(200).json({ success: true, result: users });
    }
  } catch (error) {
    console.log("error in user controller getUsers", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong try again later",
    });
  }
};
