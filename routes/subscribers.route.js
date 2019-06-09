import express from 'express';
import subscibers from './../controllers/subscribers';
import subscriberValidation from './../middlewares/subscribers';

const router = express.Router();

router.get("/subscribers", subscibers.getAll);
router.get("/subscribers/:id", subscibers.getOne);
router.post("/subscribers", subscriberValidation.create, subscibers.create);
router.put("/subscribers/:id", subscibers.update);

export default router;