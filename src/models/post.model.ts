import mongoose from "mongoose";

export interface PostInput {
  title: string;
  content: string;
}
export interface PostDocument extends PostInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const postSchema = new mongoose.Schema(
  {
    title: { type: String },
    content: { type: String },
  },
  { timestamps: true }
);

const PostModel = mongoose.model("Post", postSchema);
export default PostModel;
