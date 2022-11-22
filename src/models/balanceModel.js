const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const saldoSchema = new Schema({
    nome:{
        type: String,
        required: [true, 'Informar Nome'],
        trim: true,
    },
    saldo: {
        type: String,
        required: [true, 'Informar saldo'],
        trim: true,
        
    }
})

module.exports = mongoose.model("Saldo", saldoSchema);