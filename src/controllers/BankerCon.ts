import express from "express";
import { Banker } from "../models/Banker";

class BankerClass {
    Create: express.Handler = async (req, res, next) => {
        try {
            const banker = Banker.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                card_number: req.body.card_number,
                employee_number: req.body.employee_number
            });
            await banker.save();
            res.status(200).json(banker);
        } catch (error) {
            res.status(500).json(res.statusMessage);
            next(error);
        }
    };

    FetchAll: express.Handler = async (req, res, next) => {
        try {
            await Banker
                .find()
                .then((bankers) => res.status(200)
                .json(bankers));
        } catch (error) {
            res.status(500).json(res.statusMessage);
            next(error);
        }
    };
};

export const BANK: BankerClass = new BankerClass();


