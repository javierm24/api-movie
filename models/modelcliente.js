const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
   nombre: String,
   apellidos: String
}); 

const clientModel = mongoose.model('cliente', clientSchema);



module.exports = {
    clientSchema,
    clientModel
    
}