import express from 'express';

import { adminAuth,authentication } from './app/middlewares';

import DefaultControllersUsers from './app/controllers/DefaultControllers';
import {
  GetReservations,
  SetReservations,
  UpdateReservations,
  DeleteReservations,
  UpdateHourReservation
} from './app/controllers/Reservations';

const router = express.Router();

//default
router.get('/', authentication, DefaultControllersUsers);
/*
//user
router.get('/users', authentication, GetReservations);
router.post('/users', authentication, SetReservations);
router.put('/users/:id', authentication, UpdateReservations);
router.patch('/users/:id', authentication, UpdateHourReservation);
router.delete('/users/:id', authentication, DeleteReservations);

//reservation
router.get('/reservations', adminAuth, GetReservations);
router.post('/reservations', authentication, SetReservations);
router.put('/reservations/:id', authentication, UpdateReservations);
router.patch('/reservations/:id', authentication, UpdateHourReservation);
router.delete('/reservations/:id', authentication, DeleteReservations);

//reservation verify hours
router.post('/reservation-verify', authentication, UpdateHourReservation);
*/
export default router;
