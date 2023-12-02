import { Request, Response } from 'express';
import { UserRepository } from '../../../repositories/Users';
import { PropsUsers } from '../../../interfaces/users';

async function UpdateUser(req: Request, res: Response) {
  const { id } = req.params;
  const { email, name, password,rule }: PropsUsers = req.body;

  const User = new UserRepository();

  const getId = typeof id === 'string' ? parseInt(id) : id;

  try {
    await User.update(getId,{ email, name, password,rule });

    return res.json({
      message: 'Usuario atualizado com sucesso',
    });
  } catch (err) {

    return res.status(400).json({ message: err.message });
  }
}

export default UpdateUser;
