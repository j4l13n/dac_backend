import Message from './../middlewares/messages';
import express from 'express';
import Messages from './../controllers/Messages';

const router = express.Router();

router.get("/messages", Messages.getAll);
router.post("/send", Message.send, Messages.send);

export default router;