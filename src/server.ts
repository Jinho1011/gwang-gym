import { App } from '@/app';
import { ValidateEnv } from '@utils/validateEnv';
import { CourseRoute } from './routes/courses.route';
import { EquipmentRoute } from './routes/equipments.route';
import { ReservationRoute } from './routes/reservation.route';

ValidateEnv();

const app = new App([new CourseRoute(), new EquipmentRoute(), new ReservationRoute()]);

app.listen();
