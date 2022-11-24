const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    email: {
        type: String,
        required: [true, 'Email não informado'],
        trim: true,
        unique: true
    },

    password: {
        type: String,
        required: [true, 'Senha não informada'],
        trim: true,
        select: false
    }
})


module.exports = mongoose.model("user", userSchema);