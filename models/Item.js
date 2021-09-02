import { Schema, model } from "mongoose";

// Create Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  class: {
    type: Array,
    required: true,
  },
  slot: {
    type: Array,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});

const Item = model("item", ItemSchema);

export default Item;
