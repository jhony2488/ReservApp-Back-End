import { Request, Response } from 'express';
import { ReservationRepository } from '../../../repositories/Reservations';
import {PropsReservations} from '../../../interfaces/reservations'

async function GetReservations(req: Request, res: Response) {
  const { id } = req.query;
  const Reservation = new ReservationRepository();

  try {
    let result = [];

    if (id) {
      await Reservation.findById(parseInt(String(id), 10)).then((reservation:PropsReservations[]) => {
        result = reservation;
      });
    } else {
      await Reservation.find().then((reservations: PropsReservations[]) => {
        result = reservations;
      });
    }

    return res.json({
      result,
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

export default GetReservations;
