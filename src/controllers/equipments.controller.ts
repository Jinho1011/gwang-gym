import { EquipmentsService } from '@/services/equipments.service';
import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';

export class EquipmentsController {
  public equipment = Container.get(EquipmentsService);

  public getEquipments = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllEquipmentsData = await this.equipment.findAllEquipments();

      res.status(200).json({ data: findAllEquipmentsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };
}
