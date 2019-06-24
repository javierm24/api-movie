const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    titulo: String,
    director: String,
    genero: Array - String,
    date: Number,
    stock: Number
 });

 const movieModel = mongoose.model('movie', movieSchema);

 module.exports = {
    movieSchema,
    movieModel
}