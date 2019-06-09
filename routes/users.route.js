import express from 'express';
import users from './../controllers/users';
import UserValidate from './../middlewares/users';

const router = express.Router();

router.get("/users", users.getAll);
router.post("/login", UserValidate.login, users.login);
router.post("/register", UserValidate.register, users.register);
router.get("/users/:id", users.getOne);

export default router;
