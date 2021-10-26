//import express from 'express';
//import mongoose from 'mongoose';

import UserData from "../models/userData.js";

//const router = express.Router();

export const getUsers = async (req, res) => {
    try {
        const users = await UserData.find();
        console.log(users);

        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createUser = async (req, res) => {
    const user = req.body;
        
    const newUser = new UserData(user);
    
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
