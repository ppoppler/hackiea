const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BuzzwordSchema = new Schema({
    text: {
        type: String,
    }
})

const Buzzword = mongoose.model('Buzzwords',BuzzwordSchema);
console.log('Buzzword model created');
module.exports = Buzzword;