import { Request, Response } from 'express';
import { UserRepository } from '../../../repositories/Users';

async function DeleteUser(req: Request, res: Response) {
  const { id } = req.params;

  const getId = typeof id === 'string' ? parseInt(id,10) : id;

  const User = new UserRepository();

  try {
    await User.delete(getId);

    return res.json({
      message: 'Usuario deletado com sucesso',
    });
  } catch (err) {

    return res.status(400).json({ message: err.message });
  }
}

export default DeleteUser;
