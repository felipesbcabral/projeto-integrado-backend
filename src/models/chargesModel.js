const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cobrancaSchema = new Schema({
    cobranca:{
        type: String,
        required: [true, 'Informar nome da cobrança'],
        trim: true,
    },
    vencimento: {
        type: String,
        required: [true, 'Informar a data do vencimento'],
        trim: true,
        
    },
    valor: {
        type: String,
        required: [true, 'Informar valor'],
        trim: true,
        

    },
    situacao: {
        type: String,
        required: [true, 'informar se ta pago, pendente ou em atraso'],
        trim: true,
        

    }
})

module.exports = mongoose.model("Cobranca", cobrancaSchema);
