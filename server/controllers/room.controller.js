import Room from "../models/room.model.js";

export const createRoom = async (req, res) => {
  try {
    const { id: userId, name: userName, photoURL: userPhoto } = req.user;

    const newRoom = new Room({ ...req.body, userId, userName, userPhoto });
    await newRoom.save();

    res.status(201).json({ success: true, result: newRoom });
  } catch (error) {
    console.log("error in room controller createRoom", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong try again later",
    });
  }
};

export const getRooms = async (req, res) => {
  try {
    // newest created first
    const rooms = await Room.find().sort({ _id: -1 });
    res.status(200).json({ success: true, result: rooms });
  } catch (error) {
    console.log("error in room controller getRooms", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong try again later",
    });
  }
};

export const deleteRoom = async (req, res) => {
  try {
    const _id = req.params.roomId;
    await Room.findByIdAndDelete(_id);
    const rooms = await Room.find().sort({ _id: -1 });
    res.status(200).json({ success: true, result: rooms });
  } catch (error) {
    console.log("error in room controller deleteRoom", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong try again later",
    });
  }
};
