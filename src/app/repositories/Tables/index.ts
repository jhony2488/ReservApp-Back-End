import { Repository } from 'typeorm';
import { Tables } from '../../entities/Tables';
import dataSource from '../../../database/typeorm';
import ITablesRestaurantsRepository  from '../../interfaces/tablesRestaurantsRepository';
import { PropsTablesRestaurants } from '../../interfaces/tablesRestaurants';

export class TablesRepository implements ITablesRestaurantsRepository  {
  private repository: Repository<Tables>;

  constructor() {
    this.repository = dataSource.getRepository(Tables);
  }

  async save(data: PropsTablesRestaurants) {
    const tables = await new Tables();

    tables.number = data.number;
    tables.available = data.available;
    tables.number_seats_available_table = data.number_seats_available_table;

    await this.repository.save(tables);
    return tables;
  }
  async find(): Promise<any> {
    return this.repository.find();
  }
  async findById(id: number): Promise<any> {
    return this.repository.findOneBy({ table_id: id });
  }
  async findByNumber(number: number): Promise<any> {
    return this.repository.findOneBy({ number });
  }
  async update(id: number, data: PropsTablesRestaurants): Promise<any> {
    const tables = await this.repository.findOneBy({ table_id: id });

    if (tables == null || !tables) {
      return null;
    }

    tables.number = data.number;
    tables.available = data.available;
    tables.number_seats_available_table = data.number_seats_available_table;

    await this.repository.save(tables);
    return tables;
  }
  async delete(id: number): Promise<any> {
    const tables = await this.repository.findOneBy({ table_id: id });

    if (tables == null || !tables) {
      return null;
    }

    return this.repository.remove(tables);
  }
}
