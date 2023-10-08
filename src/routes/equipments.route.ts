import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { EquipmentsController } from '@/controllers/equipments.controller';

export class EquipmentRoute implements Routes {
  public path = '/equipments';
  public router = Router();
  public equipments = new EquipmentsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.equipments.getEquipments);
  }
}
