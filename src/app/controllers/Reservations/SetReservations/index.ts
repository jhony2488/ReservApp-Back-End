import { Request, Response } from 'express';
import { useOccupationHistory } from '../../../hooks/occupationHistory';
import { useSugestionHours, useGapFilling } from '../../../hooks/sugestionHours';
import { useIncentivesHoursLessPopular } from '../../../hooks/incentivesHourslessPopular';
import { ReservationRepository } from '../../../repositories/Reservations';
import { PropsReservations } from '../../../interfaces/reservations';

async function SetReservations(req: Request, res: Response) {
  const { date, hour, name_contact, number_peoples, contact }: PropsReservations = req.body;
  const { priority } = req.query;

  const Reservation = new ReservationRepository();

  try {
    const incentives = await useIncentivesHoursLessPopular({ type: 'desconto' }, date);

    await Reservation.findByQuery({ date, hour, name_contact, number_peoples, contact }).then(
      async (reservationsItems) => {
        if (reservationsItems.length > 0) {

          await useOccupationHistory({ contact, name_contact }).then(async (itemsReservations) => {
            if (itemsReservations.length > 0) {
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

            return res.status(400).json({
              message: 'Reserva já existente',
              sugestions: useSugestions,
              incentives,
            });
          });
        }
      },
    );

    await Reservation.save({
      date,
      hour,
      name_contact,
      number_peoples,
      contact,
      active: true,
    });

    return res.json({
      message: 'Reserva criada com sucesso',
      incentives,
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

export default SetReservations;
