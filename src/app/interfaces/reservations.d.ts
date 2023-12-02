export interface PropsReservations {
  reservation_id?: number;
  date: string;
  hour: string;
  number_peoples: string;
  name_contact: string;
  contact: string;
}

export interface PropsReservationsQuery {
  reservation_id?: number;
  date?: string;
  hour?: string;
  number_peoples?: string;
  name_contact?: string;
  contact?: string;
}
