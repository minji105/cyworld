import connectDB from '../../../lib/mongoose';
import Post from '../../../models/Post';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    try {
      const posts = await Post.find({});
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch posts" });
    }
  } else if (req.method === "POST") {
    try {
      const { title, content, section } = req.body;

      const newPost = new Post({
        title,
        content,
        section,
      });

      await newPost.save();
      res.status(201).json(newPost);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to post post' });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}