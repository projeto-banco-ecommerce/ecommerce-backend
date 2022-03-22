import { Product } from "../entities/products";
import { model, Schema } from "mongoose";

const ProductShema = new Schema<Product>({
  name: String,
  description: String,
  price: String,
  image: String,
});

export const ProductModel = model<Product>("Product", ProductShema, "product");
export default ProductModel;
