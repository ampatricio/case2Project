import PartsData from "../models/partsData.js";

export const getParts = async (req, res) => {
    try {
        const parts = await PartsData.find();
        console.log(parts);

        res.status(200).json(parts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createPart = async (req, res) => {
    const part = req.body;
        
    const newPart = new PartsData(part);
    
    try {
        await newPart.save();
        res.status(201).json(newPart);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
