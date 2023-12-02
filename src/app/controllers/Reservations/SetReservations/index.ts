import { Request, Response } from 'express';
import { ReservationRepository } from '../../../repositories/Reservations';
import { PropsReservations } from '../../../interfaces/reservations';

async function SetReservations(req: Request, res: Response) {
  const { date, hour, name_contact, number_peoples, contact }: PropsReservations = req.body;
  const Reservation = new ReservationRepository();

  try {
    await Reservation.save({
      date,
      hour,
      name_contact,
      number_peoples,
      contact,
    });

    return res.json({
      message: 'Reserva criada com sucesso',
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

export default SetReservations;
