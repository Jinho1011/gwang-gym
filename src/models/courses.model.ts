import { connectDb } from '@/db';

export const CoursesModel = async () => {
  const db = await connectDb();
  const cursor = db.collection('courses').find().toArray();
  return cursor;
};
