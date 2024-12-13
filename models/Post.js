import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  views: {
    type: Number,
    default: 0,
  },
  username: {
    type: String,
    default: 'username',
  },
});

PostSchema.methods.toJSON = function () {
  const obj = this.toObject();
  obj.createdAt = obj.createdAt.toISOString().split('T')[0];
  return obj;
};

const Post = mongoose.models.Post || mongoose.model('Post', PostSchema);

export default Post;
