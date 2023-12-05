import { Request, Response } from 'express';
import { ReservationRepository } from '../../../repositories/Reservations';
import { PropsReservations, PropsReservationsQuery } from '../../../interfaces/reservations';

import { useOccupationHistory } from '../../../hooks/occupationHistory';
import { useSugestionHours, useGapFilling } from '../../../hooks/sugestionHours';
import { useIncentivesHoursLessPopular } from '../../../hooks/incentivesHourslessPopular';

async function ReservationVerify(req: Request, res: Response) {
  const { date, hour, name_contact, contact }: PropsReservations = req.body;
  const { priority } = req.query;

  const Reservation = new ReservationRepository();

  let result: any[] = [];

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
    const incentives = await useIncentivesHoursLessPopular({ type: 'desconto' }, date);

    await Reservation.findByQuery(query).then((reservation: any) => {
      result = reservation;
    });

    if ((result = null)) {
      result = [];
    }

    if (typeof result === 'object' && result && result !== null) {
      result = [result];
    }

    if (result?.length > 0) {
      await useOccupationHistory({ contact, name_contact }).then(async (itemsReservations: any) => {
        if (typeof itemsReservations === 'object' && itemsReservations && itemsReservations !== null) {
          itemsReservations = [itemsReservations];
        }

        if (itemsReservations?.length > 0) {
          return res.json({
            message: result?.length > 0 ? 'Reserva(s) encontrada com sucesso' : 'Reserva não encontrada',
            result,
            sugestions: itemsReservations,
            incentives,
          });
        }

        if (priority === 'entre horarios') {
          const useGap = await useGapFilling(date, hour);
          return res.json({
            message: result?.length > 0 ? 'Reserva(s) encontrada com sucesso' : 'Reserva não encontrada',
            sugestions: useGap,
            incentives,
          });
        }

        const useSugestions = await useSugestionHours(date, hour);

        return res.json({
          message: result.length > 0 ? 'Reserva(s) encontrada com sucesso' : 'Reserva não encontrada',
          sugestions: useSugestions,
          incentives,
        });
      });
    }

    return res.json({
      message: result.length > 0 ? 'Reserva(s) encontrada com sucesso' : 'Reserva não encontrada',
      result,
      incentives,
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

export default ReservationVerify;
