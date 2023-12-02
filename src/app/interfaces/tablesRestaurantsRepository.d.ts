import {Tables} from '../entities/Tables';


interface ITablesRestaurantsRepository {
  save(data: any): Promise<Tables>;
  update(id:number,data: any): Promise<Tables>;
  findById(id: number): Promise<Tables | undefined>;
  findByNumber(numberTable: number): Promise<Tables | undefined>;
  find(): Promise<Tables | undefined>;
  delete(id: number): Promise<null>;
}

export default ITablesRestaurantsRepository;
