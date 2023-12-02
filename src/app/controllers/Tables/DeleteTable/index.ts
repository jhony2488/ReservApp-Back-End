import { Request, Response } from 'express';
import { TablesRepository } from '../../../repositories/Tables';

async function DeleteTable(req: Request, res: Response) {
  const { id } = req.params;

  const getId = typeof id === 'string' ? parseInt(id) : id;

  const Table = new  TablesRepository();

  try {
    await Table.delete(getId);

    return res.json({
      message: 'Mesa deletada com sucesso',
    });
  } catch (err) {

    return res.status(400).json({ message: err.message });
  }
}

export default  DeleteTable;
