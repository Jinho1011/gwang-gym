import { getFile } from '@/utils/aws';

export const EquipmentsModel = async () => {
  const data = await getFile('equipments.json', 'gwang-gym-bucket');
  return data;
};
