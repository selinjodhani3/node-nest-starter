import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { AuthenticationController } from './authentication/authentication.controller';
import { AuthenticationService } from './authentication/authentication.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController, AuthenticationController],
  providers: [AppService, AuthenticationService],
})
export class AppModule {}
