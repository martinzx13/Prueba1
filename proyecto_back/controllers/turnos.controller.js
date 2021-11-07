const Turno = require("../models/turnos.model");
let response = {
    msg: "",
    exito: false
} 

// Create

exports.create = function(req, res){
    let turno = new Turno({
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        numero_cedula: req.body.numero_cedula,
    })

    turno.save(function(err){
        if(err){
        console.log = false,
        response.exito = false,
        response.msg = "Error al guardar el turno"
        res.json(response)
        return;
    }

    response.exito = true,
    response.msg = "El turno se guardo correctamente"
    res.json(response)

})

}

// find

exports.find = function(req, res){
    Turno.find(function(err, turnos){
        res.json(turnos)
    })    
}

exports.findOne = function(req, res){
    Turno.findOne({_id: req.params.id}, function(err, turno){
        res.json(turno)
    })    
}

// find es para encontrar todo y findone es para encontrar un registro específico

// Update

exports.update = function (req, res){
    let turno = {
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        numero_cedula: req.body.numero_cedula,
    }

    Turno.findByIdAndUpdate(req.params.id, {$set: turno}, function(err){
            if(err){
            console.log = false,
            response.exito = false,
            response.msg = "Error al modificar el turno"
            res.json(response)
            return;
        }
    
        response.exito = true,
        response.msg = "El turno se modificó correctamente"
        res.json(response)        
    })

}

// Delete

exports.remove = function(req, res){
    Turno.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
        console.error = false,
        response.exito = false,
        response.msg = "Error al Eliminar el turno"
        res.json(response)
        return;
     }
    
    response.exito = true,
    response.msg = "El turno se eliminó correctamente"
    res.json(response) 

 })    

}
