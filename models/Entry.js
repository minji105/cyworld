import mongoose from "mongoose";

const EntrySchema = new mongoose.Schema({
  id: Number,
  name: String,
  message: String,
  image: String,
  date: String,
});

const Entry = mongoose.models.Entry || mongoose.model('Entry', EntrySchema);

export default Entry;