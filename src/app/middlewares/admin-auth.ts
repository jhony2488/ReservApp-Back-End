import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { UserRepository } from '../repositories/Users';

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({
    path: '.env.development',
  });
} else {
  require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
  });
}

async function auth(req: Request, res: Response, next: NextFunction) {
  const authHeader: string | undefined = req.header('Authorization');
  const authUserEmail: string | undefined = req.header('email');
  let errorUserAdmin = false;

  const User = new UserRepository();

  if (authUserEmail) {
    await User.findByEmail(authUserEmail).then((user) => {

      if (user.rule !== 'admin') {
        errorUserAdmin = true;
      }
    });
  }

  if (errorUserAdmin) {
    return res.status(401).json({ message: 'Ação invalida' });
  }

  if (!authHeader) {
    return res.status(401).json({ message: 'Token not provided' });
  }
  const token: string = req.header('Authorization');
  const jwtApp = await jwt.sign(
    {
      token: 'Bearer ' + token,
    },
    token,
  );
  try {
    const verified = await jwt.verify(jwtApp, 'Bearer ' + process.env.APP_SECRET);
    if (verified) {
      next();
    }
  } catch (error) {
    return res.status(401).json({ message: 'Token Invalid', error });
  }
}

export default auth;
