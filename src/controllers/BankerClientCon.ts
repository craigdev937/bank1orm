import express from "express";
import { Client } from "../models/Client";
import { Banker } from "../models/Banker";

class BACClass {
    Update: express.Handler = async (req, res, next) => {
        try {
            const client = await Client.findOneBy({
                id: parseInt(req.params.id)
            });
            const banker = await Banker.findOneBy({
                id: parseInt(req.params.id)
            });
            if (!client || !banker) res.json({
                msg: "Banker or Client not found"
            });
            banker!.clients = [client!];
            await banker!.save();
            res.status(200).json({
                msg: "Banker is connected to Client"
            })
        } catch (error) {
            res.status(500).json(res.statusCode);
            next(error);
        }
    };
};

export const BAC: BACClass = new BACClass();


