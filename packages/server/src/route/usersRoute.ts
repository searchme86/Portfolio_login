import express from 'express';
import { registerUserController } from '../controller/userController';

const userRoutes = express.Router();

userRoutes.post('/api/v1/users/register', registerUserController);

export default userRoutes;
