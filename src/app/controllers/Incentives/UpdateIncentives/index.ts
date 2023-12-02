import { Request, Response } from 'express';
import { IncentivesRepository } from '../../../repositories/Incentives';
import { PropsIncentives } from '../../../interfaces/incentives';

async function UpdateIncentives(req: Request, res: Response) {
  const { id } = req.params;
  const { title, description, type }: PropsIncentives = req.body;

  const Incentive = new IncentivesRepository();

  const getId = typeof id === 'string' ? parseInt(id) : id;

  try {
    await Incentive.update(getId, { title, description, type });

    return res.json({
      message: 'Incentivo atualizado com sucesso',
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

export default UpdateIncentives;
