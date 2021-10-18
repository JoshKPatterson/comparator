import { Schema, model } from "mongoose";

// Create Schema
const StatSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  score: {
    type: Array,
    required: true,
  },
});

const Stat = model("stat", StatSchema);

export default Stat;
