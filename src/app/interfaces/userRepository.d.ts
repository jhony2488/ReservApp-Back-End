import {User} from '../entities/Users';
import {PropsUsers, PropsUserLogin} from './users'

interface IUsersRepository {
  login(data: PropsUserLogin): Promise<boolean | { message: string }>;
  save(data: PropsUsers): Promise<User>;
  update(id:number,data: PropsUsers): Promise<User | null>;
  updatePassword(id:number,data: PropsUsers): Promise<User | null>;
  updateRule(id:number,rule: string): Promise<User | null>;
  findById(id: number): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  find(): Promise<User>;
  delete(id: number): Promise<any>;
}

export default IUsersRepository;
