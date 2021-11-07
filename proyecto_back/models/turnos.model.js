const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TurnosSchema = new Schema({
    nombre: {type: String, require: true, max: 60},
    apellido_p: {type: String, require: true, max: 40},
    apellido_m: {type: String, require: true, max: 40},
    numero_cedula: {type: String, require: true, max: 20},
});

module.exports = mongoose.model("turnos", TurnosSchema);
