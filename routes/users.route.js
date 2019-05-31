import express from 'express';
import users from './../controllers/users';

const router = express.Router();

router.get("/users", users.getAll);
router.post("/login", users.login);
router.post("/register", users.register);
router.get("/users/:id", users.getOne);

export default router;
