import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Inventario, InventarioDocument } from './models/inventario-schema';

@Injectable()
export class AppService {
  constructor(@InjectModel(Inventario.name) private model: Model<InventarioDocument>) {}

  async getById(id) {
    return await this.model.findById(id).exec();
  }
  async getAll() {
    return await this.model.find().exec();
  }
  async insert(inventario) {
    const inv = new this.model(inventario);
    return await inv.save();
  }
  async update(id, inventario) {
    return await this.model.findByIdAndUpdate(id, inventario).exec()
  }
  async delete(id) {
    return await this.model.findByIdAndDelete(id);
  }
  
}
