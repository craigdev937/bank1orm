import express from "express";
import { CLIENT } from "../controllers/ClientCon";

export const clientRt: express.Router = express.Router();
    clientRt.post("/", CLIENT.Create);
    clientRt.get("/", CLIENT.FetchAll);



