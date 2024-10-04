import express from "express";
import { BAC } from "../controllers/BankerClientCon";

export const bacRt: express.Router = express.Router();
    bacRt.put("/:bankerId/client/:clientId", BAC.Update);



//  "/api/banker/:bankerId/client/:clientId"


