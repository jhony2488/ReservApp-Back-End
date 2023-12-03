import { IncentivesRepository } from '../repositories/Incentives';
import { ReservationRepository } from '../repositories/Reservations';
import { PropsIncentives,PropsIncentivesQuery } from '../interfaces/incentives';
import { PropsReservations } from '../interfaces/reservations';
import {getHourAbsents} from '../utils/getHourAbsents'

export async function useIncentivesHoursLessPopular(queryIncentive: PropsIncentivesQuery, date:string) {
  const incentive = new IncentivesRepository();
  const reservation = new ReservationRepository();
  let incentives: PropsIncentives[] = [];
  let reservations: PropsReservations[] = [];

  await incentive.findByQuery(queryIncentive).then((resultIncentives: PropsIncentives[]) => {
    incentives = resultIncentives;
  });

  await reservation.findByQuery({date}).then((itemsReservations)=>{
    reservations= itemsReservations;
  });

  const results= await getHourAbsents(reservations);

  return {results, incentives};
}
