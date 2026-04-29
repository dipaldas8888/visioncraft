import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  userId: String,
  original: String,
  transformed: String,
  type: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Image || mongoose.model("Image", ImageSchema);
