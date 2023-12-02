import { Request, Response } from 'express';
import { UserRepository } from '../../../repositories/Users';
import { PropsUsers } from '../../../interfaces/users';

async function GetUsers(req: Request, res: Response) {
  const { id } = req.query;
  const User = new UserRepository();

  try {
    let result: PropsUsers[] = [];

    if (id) {
      await User.findById(parseInt(String(id), 10)).then((user: PropsUsers[]) => {
        result = user;
      });
    } else {
      await User.find().then((users: PropsUsers[]) => {
        result = users;
      });
    }

    return res.json({
      result,
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

export default GetUsers;
