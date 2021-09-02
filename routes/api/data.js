import { Router } from "express";
import Item from '../../models/Item'
import Stat from '../../models/Stat'

const router = Router();

/* 
@route   GET api/data
@desc    Get All Data
@access  Public
*/

router.get('/', async (req, res) => {
  try {
    const data = [(await Item.find()), (await Stat.find())]
    res.status(200).json(data)
  } catch (e) {
    res.status(400).json({ msg: e.message })
  }
});

export default router;