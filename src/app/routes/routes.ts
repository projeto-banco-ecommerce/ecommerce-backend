import { Router } from "express";
import productsRouter from "./products-router";
import userRouter from "./user-router";

const router = Router();

router.use("/products", productsRouter);
router.use("/user", userRouter);

router.get("/", (_, res) => {
  res.status(200).json({ message: "Bem vindo ao Ecommerce" });
});

router.get("*", (_, res) => {
  res.status(404).json({ message: "Ish, nada por aqui." });
});

export default router;
