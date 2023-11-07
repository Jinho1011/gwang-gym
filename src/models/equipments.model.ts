import { connectDb } from '@/db';

export const EquipmentsModel = async () => {
  const db = await connectDb();
  const cursor = db.collection('equipments').find().toArray();
  return cursor;
};
