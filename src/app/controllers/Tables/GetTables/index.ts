import { Request, Response } from 'express';
import { TablesRepository } from '../../../repositories/Tables';
import { PropsIncentives } from '../../../interfaces/incentives';

async function GetIncentives(req: Request, res: Response) {
  const { id } = req.query;
  const Table = new TablesRepository();

  try {
    let result: PropsIncentives[] = [];

    if (id) {
      await Table.findById(parseInt(String(id), 10)).then((incentive: PropsIncentives[]) => {
        result = incentive;
      });
    } else {
      await Table.find().then((incentives: PropsIncentives[]) => {
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
