import { getFile } from '@/utils/aws';

export const CoursesModel = async () => {
  const data = await getFile('courses.json', 'gwang-gym-bucket');
  return data;
};
