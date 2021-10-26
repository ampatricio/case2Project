import mongoose from 'mongoose';

const partsSchema = mongoose.Schema({
    partNumber: Number,
    NSN: Number,
    nomenclature: String,
    qty: Number,
    price: Number,
    supplier: String,
    desc: String
});

var PartsData = mongoose.model('PartsData', partsSchema);

export default PartsData;