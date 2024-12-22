import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    lng: {
      type: Number,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      min: 0,
      max: 50,
      default: 0,
    },
    title: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 150,
    },
    description: {
      type: String,
      required: true,
      minLength: 10,
      maxLength: 1000,
    },
    images: {
      type: [String],
      validate: (v) => Array.isArray(v) && v.length > 0,
    },
    userId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    userPhoto: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
  },
  { timestamps: true }
);

const Room = mongoose.model("Room", roomSchema);
export default Room;
