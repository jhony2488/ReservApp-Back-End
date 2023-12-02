import { Request, Response } from 'express';
import { IncentivesRepository } from '../../../repositories/Incentives';
import { PropsIncentives } from '../../../interfaces/incentives';

async function GetIncentives(req: Request, res: Response) {
  const { id } = req.query;
  const Incentive = new IncentivesRepository();

  try {
    let result: PropsIncentives[] = [];

    if (id) {
      await Incentive.findById(parseInt(String(id), 10)).then((incentive: PropsIncentives[]) => {
        result = incentive;
      });
    } else {
      await Incentive.find().then((incentives: PropsIncentives[]) => {
        result = incentives;
      });
    }

    return res.json({
      result,
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

export default GetIncentives;
