import mongoose from 'mongoose';

const partsSchema = mongoose.Schema({
    partNumber: Number,
    NSN: Number,
    nomen: String,
    qty: Number,
    price: Number,
    supplier: String,
    desc: String
});

var PartsData = mongoose.model('PartsData', partsSchema);

export default PartsData;