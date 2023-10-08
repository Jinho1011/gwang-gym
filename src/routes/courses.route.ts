import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { CoursesController } from '@/controllers/courses.controller';

export class CourseRoute implements Routes {
  public path = '/courses';
  public router = Router();
  public courses = new CoursesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.courses.getCourses);
  }
}
