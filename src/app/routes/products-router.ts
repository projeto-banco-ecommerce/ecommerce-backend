import { Router } from "express";
import ProductController from "../controllers/ProductController";
import { validateRequestSchema } from "../middlewares/ValidateSchema";

const router = Router();

export default [
  router.get("/", ProductController.getProduct),
  router.post("/", validateRequestSchema, ProductController.registerProduct),
  router.get("/:id", ProductController.consultProduct),
  router.delete("/:id", ProductController.deleteProduct),
  router.put("/:id", validateRequestSchema, ProductController.updateProduct),
];
