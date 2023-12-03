import { ReservationRepository } from '../repositories/Reservations';
import { PropsReservationsQuery, PropsReservations } from '../interfaces/reservations';

export async function useOccupationHistory(queryReservation: PropsReservationsQuery) {
  const reservation = new ReservationRepository();
  let reservations: PropsReservations[] = [];

  await reservation.findByQuery({active: false, ...queryReservation}).then((resultReservations: PropsReservations[]) => {
    reservations = resultReservations;
  });

  return reservations;
}
