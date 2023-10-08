import { ReservationsService } from '@/services/reservations.service';
import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';

export class ReservationsController {
  public reservation = Container.get(ReservationsService);

  public getReservations = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllReservationsData = await this.reservation.findAllReservations({});

      res.status(200).json({ data: findAllReservationsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };
}
