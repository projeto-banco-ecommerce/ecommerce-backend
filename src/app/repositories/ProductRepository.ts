import { Product } from "../entities/products";
import { ProductModel } from "../model/productModel";
import { ObjectId } from "mongoose";

class ProductRepository {
  async create(product: Product) {
    return ProductModel.create(product);
  }

  async update(id: string, product: Product) {
    return ProductModel.findByIdAndUpdate(id, product, {
      returnOriginal: false,
    }).exec();
  }

  async get(id: ObjectId | string) {
    return ProductModel.findById(id).exec();
  }

  async delete(id: string) {
    return ProductModel.findByIdAndDelete(id).exec();
  }

  async list() {
    return ProductModel.find().exec();
  }
}

export default ProductRepository;
