import express from "express";
import { IndexHome } from "../controllers/ClientCon";

export const clientRt: express.Router = express.Router();
    clientRt.get("/", IndexHome);



