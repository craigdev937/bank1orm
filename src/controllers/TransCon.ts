import express from "express";
import { Transaction, TransType } from "../models/Transactions";
import { Client } from "../models/Client";

class TransClass {
    Create: express.Handler = async (req, res, next) => {
        try {
            const client = await Client.findOneBy({
                id: parseInt(req.params.id)
            });
            if (!client) res.json({msg: "Client not found!"});
            const transactions = Transaction.create({
                type: req.body.type,
                amount: req.body.amount,
                client: client!
            });
            await transactions.save();
            if (req.body.type === TransType.DEPOSIT) {
                client!.balance = client!.balance + req.body.amount;
                client!.transactions = [transactions];
            } else if (req.body.type === TransType.WITHDRAW) {
                client!.balance = client!.balance - req.body.amount;
                client!.transactions = [transactions];
            }
            await client!.save();
            res.status(200).json(client);
        } catch (error) {
            res.status(500).json(res.statusMessage);
            next(error);
        }
    };

    FetchAll: express.Handler = async (req, res, next) => {
        try {
            await Transaction
                .find()
                .then((trans) => res.status(200)
                .json(trans));
        } catch (error) {
            res.status(500).json(res.statusMessage);
            next(error);
        }
    };
};

export const TRAN: TransClass = new TransClass();


