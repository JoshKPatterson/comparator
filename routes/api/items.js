import { Router } from "express";
import Item from "../../models/Item";


const router = Router();

/*
@route   GET api/data
@desc    Get All Data
@access  Public
*/

router.get("/", async (req, res) => {
  try {
    const data = await Item.find();
    res.status(200).json(data);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

router.post("/", async (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    thumbnail: req.body.thumbnail,
    class: req.body.class,
    slot: req.body.slot,
    id: req.body.id
  });
  try {
    const item = await newItem.save();
    res.status(200).json(item);
  } catch (e) {
    res.status(400).json({ msg: e.message })
  }
})

export default router;
