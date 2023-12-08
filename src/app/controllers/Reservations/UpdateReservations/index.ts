import { Request, Response } from 'express';
import { ReservationRepository } from '../../../repositories/Reservations';
import { PropsReservations } from '../../../interfaces/reservations';

import { useOccupationHistory } from '../../../hooks/occupationHistory';
import { useSugestionHours, useGapFilling } from '../../../hooks/sugestionHours';
import { useIncentivesHoursLessPopular } from '../../../hooks/incentivesHourslessPopular';

async function UpdateReservations(req: Request, res: Response) {
  const { id } = req.params;
  const { date, hour, name_contact, number_peoples, contact, active }: PropsReservations = req.body;
  const { priority } = req.query;

  const Reservation = new ReservationRepository();

  const getId = typeof id === 'string' ? parseInt(id) : id;

  try {
    const incentives = await useIncentivesHoursLessPopular({ type: 'desconto' }, date);

    await Reservation.findByQuery({ date, hour, name_contact, number_peoples, contact }).then(
      async (reservationsItems) => {
        if (reservationsItems?.length > 0) {
          await useOccupationHistory({ contact, name_contact }).then(async (itemsReservations) => {
            if (itemsReservations?.length > 0) {
              return res.status(400).json({
                message: 'Reserva já existente',
                sugestions: itemsReservations,
                incentives,
              });
            }

            if (priority === 'entre horarios') {
              const useGap = await useGapFilling(date, hour);
              return res.status(400).json({
                message: 'Reserva já existente',
                sugestions: useGap,
                incentives,
              });
            }

            const useSugestions = await useSugestionHours(date, hour);

            return res.json({
              message: 'Reserva já existente',
              sugestions: useSugestions,
              incentives,
            });
          });
        }
      },
    );

    await Reservation.update(getId, {
      date,
      hour,
      name_contact,
      number_peoples,
      contact,
      active,
    });

    return res.json({
      message: 'Reserva atualizada com sucesso',
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

export default UpdateReservations;
