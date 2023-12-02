import { Request, Response } from 'express';
import { UserRepository } from '../../../repositories/Users';
import { PropsUsers } from '../../../interfaces/users';

async function UpdateRuleUser(req: Request, res: Response) {
  const { id } = req.params;
  const { rule }: {rule: string} = req.body;

  const User = new UserRepository();

  const getId = typeof id === 'string' ? parseInt(id) : id;

  try {
    await User.updateRule(getId,rule);

    return res.json({
      message: 'Usuario regras e permissões de usuário atualizada com sucesso',
    });
  } catch (err) {

    return res.status(400).json({ message: err.message });
  }
}

export default UpdateRuleUser;
