import connectDB from "../../../lib/mongoose";
import Post from "../../../models/Post";

export default async function handler(req, res) {
  await connectDB();
  const { title } = req.query;

  if (req.method === "GET") {
    try {
      const post = await Post.findOne({ title });

      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }

      post.views += 1;
      await post.save();

      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch post" });
    }
  } else if (req.method === "PUT") {
    try {
      const updatedPost = await Post.findOneAndUpdate({ title }, req.body, {
        new: true,
      });

      if (!updatedPost) {
        return res.status(404).json({ error: "Post not found" });
      }

      res.status(200).json(updatedPost);
    } catch (error) {
      res.status(500).json({ error: "Failed to update post" });
    }
  } else if (req.method === "DELETE") {
    try {
      const deletedPost = await Post.findOneAndDelete({ title });

      if (!deletedPost) {
        return res.status(404).json({ error: "Post not found" });
      }

      res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete post" });
    }
  } else {
    res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
