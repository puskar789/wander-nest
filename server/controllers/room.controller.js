import Room from "../models/room.model.js";

export const createRoom = async (req, res) => {
  try {
    const { id: userId, name: userName, photoURL: userPhoto } = req.user;

    const newRoom = new Room({ ...req.body, userId, userName, userPhoto });
    await newRoom.save();

    res.status(201).json({ success: true, result: newRoom });
  } catch (error) {
    console.log("error in user controller register", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong try again later",
    });
  }
};
