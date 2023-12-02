import {Reservation} from '../entities/Reservations';
import {PropsReservations,PropsReservationsQuery} from './reservations'

interface IReservationsRepository {
  save(data: PropsReservations): Promise<Reservation>;
  update(id:number,data: PropsReservations): Promise<Reservation>;
  findById(id: number): Promise<Reservation | undefined>;
  findByQuery(query: PropsReservationsQuery): Promise<Reservation | undefined>;
  find(): Promise<Reservation | undefined>;
  delete(id: number): Promise<null>;
}

export default IReservationsRepository;
