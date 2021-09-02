import { Router } from "express";
import Stat from "../../models/Stat";

const router = Router();

/*
@route   GET api/data
@desc    Get All Data
@access  Public
*/

router.get("/", async (req, res) => {
  try {
    const data = await Stat.find();
    res.status(200).json(data);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

router.post("/", async (req, res) => {
  const newStat = new Stat({
    name: req.body.name,
    stat: req.body.stat
  });
  try {
    const stat = await newStat.save();
    res.status(200).json(stat);
  } catch (e) {
    res.status(400).json({ msg: e.message })
  }
})

export default router;
