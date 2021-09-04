import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Inventario, InventarioSchema } from './models/inventario-schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
      {
        useNewUrlParser: true,
        authSource: 'admin',
        useUnifiedTopology: true,
        connectTimeoutMS: 10000,
        socketTimeoutMS: 45000,
        family: 4,
        auth: {
          password: process.env.DB_PASSWORD,
          username: process.env.DB_USER,
        }
      }
    ),
    MongooseModule.forFeature([
      {
        name: Inventario.name,
        schema: InventarioSchema
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
