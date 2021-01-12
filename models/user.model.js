const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    }
});

const schemaName = 'User';

module.exports = {
    schema,
    schemaName
};


