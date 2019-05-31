import express from 'express';
import calls from './../controllers/Calls';

const router = express.Router();

router.get("/call", calls.call);
router.post("/webhooks/events", calls.eventUrl);

export default router;