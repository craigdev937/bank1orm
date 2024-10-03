import express from "express";
import { TRAN } from "../controllers/TransCon";

export const transRt: express.Router = express.Router();
    transRt.post("/:id/trans", TRAN.Create);
    transRt.get("/:id/trans", TRAN.FetchAll);




