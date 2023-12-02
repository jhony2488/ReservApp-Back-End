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

 import {
 GetTables,
 SetTables,
 UpdateTable,
 DeleteTable
  } from './app/controllers/Tables';

const router = express.Router();

//default
router.get('/', authentication, DefaultControllersUsers);

//reservations
router.get('/reservations', adminAuth, GetReservations);
router.post('/reservations', authentication, SetReservations);
router.put('/reservations/:id', authentication, UpdateReservations);
router.delete('/reservations/:id', authentication, DeleteReservations);

//reservation verify hours
router.post('/reservation-verify', authentication, ReservationVerify);

//user
router.get('/users', authentication, GetUsers);
router.post('/user/login', authentication, Login);
router.post('/users', authentication, SetUser);
router.put('/users/:id', authentication, UpdateUser);
router.patch('/users/:id', authentication, UpdateRuleUser);
router.delete('/users/:id', authentication, DeleteUser);

//Incentives
router.get('/incentives', authentication, GetIncentives);
router.post('/incentives', authentication, SetIncentives);
router.put('/incentives/:id', authentication, UpdateIncentives);
router.delete('/incentives/:id', authentication, DeleteIncentive);

//Tables
router.get('/tables', authentication, GetTables);
router.post('/tables', authentication, SetTables);
router.put('/tables/:id', authentication, UpdateTable);
router.delete('/tables/:id', authentication,  DeleteTable);


export default router;
