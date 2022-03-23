import { Router } from "express";
import UserController from "../controllers/UserController";
import { validateRequestSchema } from "../middlewares/ValidateSchema";

const router = Router();

export default [
  router.post("/", validateRequestSchema, UserController.registerUser),
  router.get("/:id", UserController.consultUser),
  router.delete("/:id", UserController.deleteUser),
  router.put("/:id", validateRequestSchema, UserController.updateUser),
];
