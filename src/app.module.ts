import { User } from './models/user.model';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'database-pao.chq8822w4ryp.ap-southeast-1.rds.amazonaws.com',
      port: 5432,
      username: 'pao',
      password: 'p123456v',
      database: 'pao_db_nest',
      entities: [User], // Add your entities here
      synchronize: true, // Note: This should be set to false in production
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
