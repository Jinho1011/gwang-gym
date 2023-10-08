import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { ReservationsController } from '@/controllers/reservations.controller';

export class ReservationRoute implements Routes {
  public path = '/reservations';
  public router = Router();
  public reservations = new ReservationsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.reservations.getReservations);
  }
}
