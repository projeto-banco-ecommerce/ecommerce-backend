import { Request, Response } from "express";
import ProductRepository from "../repositories/ProductRepository";
import bindedInstance from "../utils/bindedInstance";

export class ProductController {
  private repository: ProductRepository;

  constructor() {
    this.repository = new ProductRepository();
  }

  async getProduct(req: Request, res: Response) {
    try {
      const products = await this.repository.list();
      res.status(200).json({ data: products });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }

  async registerProduct(req: Request, res: Response) {
    try {
      const products = await this.repository.create(req.body);
      res.status(201).json({ data: products });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }

  async updateProduct(req: Request, res: Response) {
    try {
      const products = await this.repository.update(req.params.id, req.body);
      res.status(200).json({ data: products });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }

  async consultProduct(req: Request, res: Response) {
    try {
      const products = await this.repository.get(req.params.id);
      res.status(200).json({ data: products });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }

  async deleteProduct(req: Request, res: Response) {
    try {
      const products = await this.repository.delete(req.params.id);
      res.status(200).json({ data: products });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }
}

export default bindedInstance(ProductController);
