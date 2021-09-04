import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InventarioDocument = Inventario & Document;

@Schema()
export class Inventario {

  @Prop()
  cantidad: number;

  @Prop()
  producto: number;
}

export const InventarioSchema = SchemaFactory.createForClass(Inventario);