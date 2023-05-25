import User from '../model/User';
import { Request, Response } from 'express';

export const registerUserController = async (req: Request, res: Response) => {
  const { fullname, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.json({
      msg: 'User already exists',
    });
  }

  const user = await User.create({
    fullname,
    email,
    password,
  });

  res.status(201).json({
    status: 'success',
    message: 'User Registered Successfully',
    data: user,
  });
};
