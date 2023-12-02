import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { UserRepository } from '../../../repositories/Users';
import { PropsUserLogin } from '../../../interfaces/users';

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({
    path: '.env.development',
  })
} else {
  require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
  })
}

async function Login(req: Request, res: Response) {
  const { email, password }: PropsUserLogin = req.body;
  const User = new UserRepository();
  let result: boolean | { message: string } = { message: 'Login falhou' };
  let resultToken: any = null;

  try {
    await User.login({ email, password }).then((result) => {
      result = result;
    });

    if (typeof result  !=='string') {
      if(result){
        const secret = process.env.APP_SECRET;
        const payload = {
          email
        };

        const token = jwt.sign(payload, secret, {
          algorithm: 'HS256',
        });
        resultToken = { token };

        return res.json({
          message: result.message ? result.message : result ? 'Login realizado com sucesso' : 'Email ou senha incorretos',
          token: resultToken.token
        });
      }
    }

    return res.json({
      message: 'Email ou senha incorretos',
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

export default Login;
