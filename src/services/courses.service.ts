import { CoursesModel } from '@/models/courses.model';
import { Service } from 'typedi';

@Service()
export class CoursesService {
  public async findAllCourses() {
    const courses = await CoursesModel();
    return courses;
  }
}
