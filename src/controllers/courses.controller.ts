import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { CoursesService } from '@/services/courses.service';

export class CoursesController {
  public course = Container.get(CoursesService);

  public getCourses = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllCoursesData = await this.course.findAllCourses();

      res.status(200).json({ data: findAllCoursesData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };
}
