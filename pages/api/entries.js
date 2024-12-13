import connectDB from '../../lib/mongoose';
import Entry from '../../models/Entry';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    try {
      const entries = await Entry.find();
      res.json(entries);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch posts" });
    }
  } else if (req.method === "POST") {
    try {
      const { id, name, message, image } = req.body;
      const newEntry = new Entry({
        id,
        name,
        message,
        image,
        date: new Date().toLocaleDateString(),
      });

      await newEntry.save();
      res.json(newEntry);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to post post' });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}