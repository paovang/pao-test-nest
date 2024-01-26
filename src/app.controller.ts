import { User } from './models/user.model';
import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { Repository } from 'typeorm';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  @Get()
  getHello(): Promise<User[]> {
    return this.userRepository.find();

    // return this.appService.getHello();
  }
}
