import { Request, Response } from 'express';
import { TablesRepository } from '../../../repositories/Tables';
import { PropsTablesRestaurants } from '../../../interfaces/tablesRestaurants';

async function UpdateTable(req: Request, res: Response) {
  const { id } = req.params;
  const { number,available,number_seats_available_table }: PropsTablesRestaurants = req.body;

  const Table = new TablesRepository();

  const getId = typeof id === 'string' ? parseInt(id) : id;

  try {
    await Table.update(getId, { number,available,number_seats_available_table  });

    return res.json({
      message: 'Mesa atualizada com sucesso',
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

export default UpdateTable;
