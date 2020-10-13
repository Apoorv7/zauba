const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema nd model

const MylibSchema = new Schema({
    company: {
        type: String,
        required: true,
      },
      cin: {
        type: String,
        required: true
      },
    }, { timestamps: true });

const Mylib = mongoose.model('mylibs',MylibSchema);

module.exports = Mylib;