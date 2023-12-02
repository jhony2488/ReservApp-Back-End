import {Reservation} from '../entities/Reservations';
import {PropsIncentives} from './incentives'

interface IIncentivesRepository {
  save(data: PropsIncentives): Promise<any>;
  update(id:number,data: PropsIncentives): Promise<any>;
  findById(id: number): Promise<any>;
  find(): Promise<any>;
  delete(id: number): Promise<any>;
}

export default IIncentivesRepository;
