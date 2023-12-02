import { Request, Response } from 'express';
import { ReservationRepository } from '../../../repositories/Reservations';
import { PropsReservations } from '../../../interfaces/reservations';

async function UpdateReservations(req: Request, res: Response) {
  const { id } = req.params;
  const { date, hour, name_contact, number_peoples, contact }: PropsReservations = req.body;
  const Reservation = new ReservationRepository();

  const getId = typeof id === 'string' ? parseInt(id) : id;

  try {
    await Reservation.update(getId, {
      date,
      hour,
      name_contact,
      number_peoples,
      contact,
    });

    return res.json({
      message: 'Reserva atualizada com sucesso',
    });
  } catch (err) {

    return res.status(400).json({ message: err.message });
  }
}

export default UpdateReservations;
