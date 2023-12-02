
import { Request, Response } from 'express';
import { ReservationRepository } from '../../../repositories/Reservations';
import { PropsReservations } from '../../../interfaces/reservations';

async function DeleteReservations(req: Request, res: Response) {
  const { id } = req.params;

  const getId = typeof id === 'string' ? parseInt(id) : id;

  const Reservation = new ReservationRepository();

  try {
    await Reservation.delete(getId);

    return res.json({
      message: 'Tarefa deletada com sucesso',
    });
  } catch (err) {

    return res.status(400).json({ message: err.message });
  }
}

export default DeleteReservations;
