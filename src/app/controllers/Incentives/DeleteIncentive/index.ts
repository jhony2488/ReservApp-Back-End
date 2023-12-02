import { Request, Response } from 'express';
import { IncentivesRepository } from '../../../repositories/Incentives';

async function DeleteIncentive(req: Request, res: Response) {
  const { id } = req.params;

  const getId = typeof id === 'string' ? parseInt(id) : id;

  const Incentive = new IncentivesRepository();

  try {
    await  Incentive.delete(getId);

    return res.json({
      message: 'Incentivo deletado com sucesso',
    });
  } catch (err) {

    return res.status(400).json({ message: err.message });
  }
}

export default  DeleteIncentive;
