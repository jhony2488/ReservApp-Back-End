import { Repository } from 'typeorm';
import { Incentives } from '../../entities/Incentives';
import dataSource from '../../../database/typeorm';
import IIncentivesRepository from '../../interfaces/incentivesRepository';
import { PropsIncentives, PropsIncentivesQuery } from '../../interfaces/incentives';

export class IncentivesRepository implements IIncentivesRepository {
  private repository: Repository<Incentives>;

  constructor() {
    this.repository = dataSource.getRepository(Incentives);
  }

  async save(data: PropsIncentives) {
    const incentives = await new Incentives();

    incentives.title = data.title;
    incentives.description = data.description;
    incentives.type = data.type;

    await this.repository.save(incentives);
    return incentives;
  }
  async find(): Promise<any> {
    return this.repository.find();
  }
  async findById(id: number): Promise<any> {
    return this.repository.findOneBy({ incentive_id: id });
  }
  async findByQuery(query: PropsIncentives | PropsIncentivesQuery): Promise<any> {
    return this.repository.findOneBy(query);
  }
  async update(id: number, data: PropsIncentives): Promise<any> {
    const incentives = await this.repository.findOneBy({ incentive_id: id });

    if (incentives == null || !incentives) {
      return null;
    }

    incentives.title = data.title;
    incentives.description = data.description;
    incentives.type = data.type;

    await this.repository.save(incentives);
    return incentives;
  }
  async delete(id: number): Promise<any> {
    const incentives = await this.repository.findOneBy({ incentive_id: id });

    if (incentives == null || !incentives) {
      return null;
    }

    return this.repository.remove(incentives);
  }
}
