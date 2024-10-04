import express from "express";
import { CLIENT } from "../controllers/ClientCon";

export const clientRt: express.Router = express.Router();
    clientRt.post("/", CLIENT.Create);
    clientRt.get("/", CLIENT.FetchAll);
    clientRt.get("/:id", CLIENT.GetOne);
    clientRt.put("/:id", CLIENT.Update);
    clientRt.delete("/:id", CLIENT.Delete);



