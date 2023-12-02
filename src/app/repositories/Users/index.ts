import { Repository } from 'typeorm';
import { User } from '../../entities/Users';
import dataSource from '../../../database/typeorm';
import bcrypt from 'bcrypt';
import IUsersRepository from '../../interfaces/userRepository';
import { PropsUsers, PropsUserLogin } from '../../interfaces/users';

export class UserRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = dataSource.getRepository(User);
  }

  async login(data: PropsUserLogin) {
    let loginValidation: boolean = false;
    const user = await this.repository.findOneBy({ email: data.email });

    if (!user || user === null) {
      return { message: 'Email ou senha incorreto' };
    }

    await bcrypt.compare(data.password, user.password, (err, result) => {
      if (result) {
        loginValidation = true;
      }
    });

    return loginValidation;
  }

  async save(data: PropsUsers) {
    const saltRounds = 10;
    const user = await new User();

    user.name = data.name;
    user.email = data.email;

    await bcrypt.hash(data.password, saltRounds, (err, hash: string) => {
      user.password = hash;
    });

    user.rule = data.rule;

    await this.repository.save(user);
    return user;
  }
  async find(): Promise<any> {
    return this.repository.find();
  }
  async findById(id: number): Promise<any> {
    return this.repository.findOneBy({ user_id: id });
  }
  async findByEmail(email: string): Promise<any> {
    return this.repository.findOne({
      where: [{ email }],
    });
  }
  async update(id: number, data: PropsUsers): Promise<any> {
    const user = await this.repository.findOneBy({ user_id: id });

    if (user == null || !user) {
      return null;
    }

    user.name = data.name;
    user.email = data.email;

    user.rule = data.rule;

    await this.repository.save(user);
    return user;
  }

  async updatePassword(id: number, data: PropsUsers): Promise<any> {
    const saltRounds = 10;
    const user = await this.repository.findOneBy({ user_id: id });

    if (user == null || !user) {
      return null;
    }

    await bcrypt.hash(data.password, saltRounds, (err, hash: string) => {
      user.password = hash;
    });

    await this.repository.save(user);
    return user;
  }
  async updateRule(id: number, data: PropsUsers): Promise<any> {
    const user = await this.repository.findOneBy({ user_id: id });

    if (user == null || !user) {
      return null;
    }

    user.rule = data.rule;

    await this.repository.save(user);
    return user;
  }
  async delete(id: number): Promise<any> {
    const user = await this.repository.findOneBy({ user_id: id });

    if (user == null || !user) {
      return null;
    }

    return this.repository.remove(user);
  }
}
