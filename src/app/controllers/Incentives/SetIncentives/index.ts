import { Request, Response } from 'express';
import { IncentivesRepository } from '../../../repositories/Incentives';
import { PropsIncentives } from '../../../interfaces/incentives';

async function SetIncentives(req: Request, res: Response) {
  const { title, description, type }: PropsIncentives = req.body;

  const User = new IncentivesRepository();

  try {
    await User.save({ title, description, type });

    return res.json({
      message: `Incentivo do tipo ${type} criado com sucesso`,
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

export default SetIncentives;
