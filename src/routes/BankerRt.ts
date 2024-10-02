import express from "express";
import { BANK } from "../controllers/BankerCon";

export const bankRt: express.Router = express.Router();
    bankRt.post("/", BANK.Create);
    bankRt.get("/", BANK.FetchAll);


