import express from "express";
import { Client } from "../models/Client";

class ClientClass {
    Create: express.Handler = async (req, res, next) => {
        try {
            const client = Client.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                card_number: req.body.card_number,
                balance: req.body.balance
            });
            await client.save();
            res.status(200).json(client);
        } catch (error) {
            res.status(500).json(res.statusMessage);
            next(error);
        }
    };

    FetchAll: express.Handler = async (req, res, next) => {
        try {
            await Client
                .find()
                .then((clients) => res.status(200)
                .json(clients));
        } catch (error) {
            res.status(500).json(res.statusMessage);
            next(error);
        }
    };

    GetOne: express.Handler = async (req, res, next) => {
        try {
            const client = await Client.findOneBy({
                id: parseInt(req.params.id)
            });
            res.status(200).json(client);
        } catch (error) {
            res.status(500).json(res.statusMessage);
            next(error);
        }
    };

    Update: express.Handler = async (req, res, next) => {
        try {            
            const clientID = await Client.findOneBy({
                id: parseInt(req.params.id)
            });
            const client = Client.merge(clientID!, {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                card_number: req.body.card_number,
                balance: req.body.balance
            });
            await client.save();
            res.status(200).json(client)
        } catch (error) {
            res.status(500).json(res.statusMessage);
            next(error);
        }
    };

    Delete: express.Handler = async (req, res, next) => {
        try {
            const clientID = await Client.delete({
                id: parseInt(req.params.id)
            });
            res.status(200).json(clientID);
        } catch (error) {
            res.status(500).json(res.statusMessage);
            next(error);
        }
    };
};

export const CLIENT: ClientClass = new ClientClass();




