import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PreauthMiddleware } from './auth/preauth.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './config/postgres.config';
@Module({
  imports: [UserModule,
    TypeOrmModule.forRoot(dbConfig),
    UserModule],
  controllers: [AppController],
  providers: [AppService],
}) 
export class AppModule implements NestModule {

configure(consumer: MiddlewareConsumer) {
  consumer.apply(PreauthMiddleware).forRoutes({
    path : '*',
    method :  RequestMethod.ALL
  });
}
}
