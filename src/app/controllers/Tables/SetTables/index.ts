import { Request, Response } from 'express';
import { TablesRepository } from '../../../repositories/Tables';
import { PropsTablesRestaurants } from '../../../interfaces/tablesRestaurants';

async function SetTables(req: Request, res: Response) {
  const { number,available,number_seats_available_table }: PropsTablesRestaurants = req.body;

  const Table = new TablesRepository();

  try {
    await Table.save({ number,available,number_seats_available_table });

    return res.json({
      message: `Mesa criado com sucesso`,
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

export default SetTables;
