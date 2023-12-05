import express from 'express';

import { adminAuth,authentication } from './app/middlewares';

import DefaultControllersUsers from './app/controllers/DefaultControllers';
import {
  GetReservations,
  SetReservations,
  UpdateReservations,
  DeleteReservations,
  ReservationVerify
} from './app/controllers/Reservations';

import {
 GetUsers,
 Login,
 UpdateUser,
 SetUser,
 DeleteUser,
 UpdateRuleUser
} from './app/controllers/User';

import {
 GetIncentives,
 SetIncentives,
 UpdateIncentives,
 DeleteIncentive
 } from './app/controllers/Incentives';


const router = express.Router();

//default
router.get('/', authentication, DefaultControllersUsers);

//reservations
router.get('/reservations', adminAuth, GetReservations);
router.post('/reservations', authentication, SetReservations);
router.put('/reservations/:id', adminAuth, UpdateReservations);
router.delete('/reservations/:id', adminAuth, DeleteReservations);

//reservation verify hours
router.post('/reservation-verify', adminAuth, ReservationVerify);

//user
router.get('/users', authentication, GetUsers);
router.post('/user/login', authentication, Login);
router.post('/users', authentication, SetUser);
router.put('/users/:id', authentication, UpdateUser);
router.patch('/users/:id', authentication, UpdateRuleUser);
router.delete('/users/:id', adminAuth, DeleteUser);

//Incentives
router.get('/incentives', authentication, GetIncentives);
router.post('/incentives', adminAuth, SetIncentives);
router.put('/incentives/:id', adminAuth, UpdateIncentives);
router.delete('/incentives/:id', adminAuth, DeleteIncentive);


export default router;
