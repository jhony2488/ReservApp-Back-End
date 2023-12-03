import { ReservationRepository } from '../repositories/Reservations';
import { filterObjectsBeforeCurrentDateTime } from '../utils/currentFormDateTimeAndFilter';
import { PropsReservationsQuery, PropsReservations } from '../interfaces/reservations';

export async function useValidationReservations() {
  const reservation = new ReservationRepository();
  let reservations: PropsReservations[] = [];

  await reservation.findByQuery({ active: true }).then((resultReservations: PropsReservations[]) => {
    reservations = resultReservations;
  });

  reservations = await filterObjectsBeforeCurrentDateTime(reservations);

  reservations = await reservations.map((item) => {
    return { ...item, active: false };
  });

  await reservations.map(async (item: PropsReservations) => {
    await reservation.update(item.reservation_id || 0, item);
    return;
  });
}
