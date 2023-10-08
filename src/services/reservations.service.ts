import axios from 'axios';
import { Service } from 'typedi';

@Service()
export class ReservationsService {
  public async findAllReservations({ startIndex = 1, endIndex = 10 }: { startIndex?: number; endIndex?: number }) {
    const KEY = process.env.SEOUL;
    const url = `http://openapi.seoul.go.kr:8088/${KEY}/json/ListPublicReservationSport/${startIndex}/${endIndex}/`;
    const response = await axios.get(url);
    return response.data;
  }
}
