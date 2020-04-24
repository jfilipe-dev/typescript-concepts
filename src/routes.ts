import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(req: Request, res: Response) {
  const user = createUser({
    email: 'joao@filipe.com',
    password: '123456',
    techs: [
      'Node.js',
      'ReactJs',
      'React native',
      { title: 'javascript', experience: 100 }
    ]
  });

  return res.json(user);
}