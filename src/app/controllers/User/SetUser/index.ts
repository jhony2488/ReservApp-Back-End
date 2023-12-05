import { Request, Response } from 'express';
import { UserRepository } from '../../../repositories/Users';
import { PropsUsers } from '../../../interfaces/users';

async function SetUser(req: Request, res: Response) {
  const { email, name, password,rule }: PropsUsers = req.body;

  const User = new UserRepository();

  try {
    await User.save({ email, name, password,rule });

    return res.status(201).json({
      message: 'Usuario criado com sucesso',
      user: { email, name, password,rule }
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

export default SetUser;
