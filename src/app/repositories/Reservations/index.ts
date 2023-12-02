import { Repository } from 'typeorm';
import { Reservation } from '../../entities/Reservations';
import dataSource from '../../../database/typeorm';
import IReservationsRepository from '../../interfaces/reservationsRepository';
import { PropsReservations,PropsReservationsQuery } from '../../interfaces/reservations';

export class ReservationRepository implements IReservationsRepository {
  private repository: Repository<Reservation>;

  constructor() {
    this.repository = dataSource.getRepository(Reservation);
  }

  async save(data: PropsReservations) {
    const reservation = await new Reservation();

    reservation.date = data.date;
    reservation.hour = data.hour;
    reservation.name_contact = data.name_contact;
    reservation.number_peoples = data.number_peoples;
    reservation.contact = data.contact;

    await this.repository.save(reservation);
    return reservation;
  }
  async find(): Promise<any> {
    return this.repository.find();
  }
  async findById(id: number): Promise<any> {
    return this.repository.findOneBy({ reservation_id: id });
  }
  async findByQuery(query: PropsReservationsQuery): Promise<any> {
    return this.repository.findOneBy(query);
  }
  async update(id: number, data: PropsReservations): Promise<any> {
    const reservation = await this.repository.findOneBy({ reservation_id: id });

    if (reservation == null || !reservation) {
      return null;
    }

    reservation.date = data.date;
    reservation.hour = data.hour;
    reservation.name_contact = data.name_contact;
    reservation.number_peoples = data.number_peoples;
    reservation.contact = data.contact;
    await this.repository.save(reservation);
    return reservation;
  }
  async delete(id: number): Promise<any> {
    const reservation = await this.repository.findOneBy({ reservation_id: id });

    if (reservation == null || !reservation) {
      return null;
    }

    return this.repository.remove(reservation);
  }
}
