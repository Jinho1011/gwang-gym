import { EquipmentsModel } from '@/models/equipments.model';
import { Service } from 'typedi';

@Service()
export class EquipmentsService {
  public async findAllEquipments() {
    const equipments = EquipmentsModel;
    return equipments;
  }
}
