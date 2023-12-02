import { Request, Response } from 'express';
import { ReservationRepository } from '../../../repositories/Reservations';
import { PropsReservations, PropsReservationsQuery } from '../../../interfaces/reservations';

async function ReservationVerify(req: Request, res: Response) {
  const { date, hour, name_contact, contact }: PropsReservations = req.body;
  const Reservation = new ReservationRepository();
  let result = [];

  const query: PropsReservationsQuery = { date, hour, name_contact, contact };

  if (!date || date === null) {
    delete query.date;
  }
  if (!hour || hour === null) {
    delete query.hour;
  }
  if (!name_contact || name_contact === null) {
    delete query.name_contact;
  }
  if (!contact || contact === null) {
    delete query.contact;
  }

  try {
    await Reservation.findByQuery(query).then((reservation) => {
      result = reservation;
    });

    return res.json({
      message: result.length > 0 ? 'Reserva(s) encontrada com sucesso' : 'Reserva não encontrada',
      result,
    });
  } catch (err) {

    return res.status(400).json({ message: err.message });
  }
}

export default ReservationVerify;
