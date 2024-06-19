const mongoose = require('mongoose');

const farmSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Animal name is required'],
        unique: [true, 'Animal with name already exists']
    },
    breed: {
        type: String,
        required: [true, 'Animal breed is required'],
    },
    colour: {
        type: String,
        required: [true, 'Animal colour is required'],
    },
    age: {
        type: Number,
        required: [true, 'Animal age is required'],
    },
    isMatured: {
        type: Boolean,
        default: false,
    },
    isSold: {
        type: Boolean,
        default: false,
    },
}, {timestamps: true});

const farmModel = mongoose.model('Farm', farmSchema);

module.exports = farmModel;