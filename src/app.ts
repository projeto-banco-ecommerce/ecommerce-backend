import express from "express";
import cors from "cors";
import { json } from "body-parser";
import configMongoDB from "./database";
import router from "./app/routes/routes";

configMongoDB();

const app = express();

app.use(cors());
app.use(json());
app.use("/", router);

export default app;
