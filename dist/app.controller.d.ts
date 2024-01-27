import { User } from './models/user.model';
import { AppService } from './app.service';
import { Repository } from 'typeorm';
export declare class AppController {
    private readonly appService;
    private userRepository;
    constructor(appService: AppService, userRepository: Repository<User>);
    getHello(): Promise<User[]>;
    getUserById(id: number): Promise<User | undefined>;
    createUser(body: any): Promise<User>;
}
