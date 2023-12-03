import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { UserRepository } from '../../../repositories/Users';
import { PropsUserLogin } from '../../../interfaces/users';

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({
    path: '.env.development',
  });
} else {
  require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
  });
}

async function Login(req: Request, res: Response) {
  const { email, password }: PropsUserLogin = req.body;
  const User = new UserRepository();
  let resultGet: any | { message: string } = { message: 'Login falhou' };
  let resultToken: any = null;

  try {
    await User.login({ email, password }).then((result) => {
      resultGet = result;
    });

    if(!resultGet || resultGet==null){
      return res.json({
        message: 'Email ou senha incorretos',
      });
    }

    await bcrypt.compare(password, resultGet.password, (err, result: boolean) => {
      if (result) {
        const secret = process.env.APP_SECRET;
        const payload = {
          email,
        };

        const token = jwt.sign(payload, secret, {
          algorithm: 'HS256',
        });
        resultToken = { token };

        return res.json({
          message: resultGet.message
            ? resultGet.message
            : resultGet
            ? 'Login realizado com sucesso'
            : 'Email ou senha incorretos',
          token: resultToken.token,
          email,
        });
      }
      return res.json({
        message: 'Email ou senha incorretos',
      });
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

export default Login;
