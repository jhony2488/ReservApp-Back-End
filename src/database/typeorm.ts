import { DataSource } from 'typeorm';

import {User} from '../app/entities/Users'
import {Reservation} from '../app/entities/Reservations'
import {Incentives} from '../app/entities/Incentives'

import {reservations1693428187268} from './migrations/2023-12-02_10-39-00_create_reservations_table'
import {users1693428187268} from './migrations/2023-12-02_10-39-00_create_users_table'
import {incentives1693428187268} from './migrations/2023-12-02_10-39-00_create_incentives_table'

require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.BD_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Reservation, User,Incentives],
  migrations: [reservations1693428187268,users1693428187268, incentives1693428187268 ],
});

export default dataSource;
