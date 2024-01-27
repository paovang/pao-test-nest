import { User } from './models/user.model';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Get('list/users')
  getHello(): Promise<User[]> {
    return this.userRepository.find({
      order: {
        id: 'DESC', 
      },
    });
  }

  @Get('user/:id')
  async getUserById(@Param('id') id: number): Promise<User | undefined> {
    return this.userRepository.findOne({
      where: { id },
    });
  }

  @Get('list/user/:id')
  async getListUserById(@Param('id') id: number): Promise<User | undefined> {
    return this.userRepository.findOne({
      where: { id },
    });
  }

  @Post('add/user')
  createUser(@Body() body): Promise<User> {
    const { username, email } = body;
    
    const newUser = this.userRepository.create({ username, email });
    return this.userRepository.save(newUser);
  }
}
