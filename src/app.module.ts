import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './modules/user/user.module';
import { StateModule } from './modules/state/state.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      logging: ['error'],
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      entities: [`${__dirname}/**/*.entity{*.js, *.ts}`],
      migrations: [`${__dirname}/migrations/*{.js,.ts}`],
      migrationsRun: true,
    }),
    UserModule,
    StateModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
