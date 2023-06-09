const Device = require('../models/deviceModel.js')

//Añadimos una nuevo dispositivo
const addDevice = (req,res)=>{
    console.log(req.body);
    Device.create(
        {
            name: req.body.name,
            deviceType: req.body.deviceType,
            roomId: req.body.roomId
        }
    )
    .then( deviceDoc=>res.status(200).send({msg:"Dispositivo añadido"}))
    .catch(error=>{
        console.error(error.code);
        switch(error.code){
            case 11000:
                res.status(400).send({msg: "Error 11.000: Este dispositivo ya existe. No puedes duplicarlo"})
                break;
            default :
            res.status(400).send(error);
        }
    })
};

//Consultamos dispositivos por habitación. GET
//habría otro get para ver todos los dispositivos de la casa? No tendría roomid pero si houseid
const getDevices = (req, res) => {
    // podríamos pedir devices en habitación: on; tipo: persiana; todos
    // Siempre necesitaré el roomId para saber 
    if(req.params.roomId){
        Device.findById(req.params.deviceId)
            .then( devicesDoc => { 
                if(devicesDoc.length === null ) {
                    res.status(400).send({msg: 'Esta estancia no tiene dispositivos.'})
                } else {
                    res.status(200).send( devicesDoc )
                }
            })
            .catch( error => {  
                switch (error.name){
                    case 'Cast Error':
                        res.status(400).send({msg: 'Formato de id inválido.'})
                        break;
                    default :
                        res.status(400).send(error)
                }
            })
    } else {
        let filter = {}
        if (req.query.status) {
            filter.status = req.query.status
        }

        //TODO: Find by text search

        //TODO: Find by datemax is not working properly
        if (req.query.datemax) {
            filter.dueDate = { $lte: new Date(req.query.datemax) }
        }

        console.log(req.query.status,filter)
        Room.find(filter)
            .then(roomDocs => {
                if(roomDocs.length === 0) {
                    res.status(404).send({msg: "No se han encontrado estancias."})
                } else {
                    res.status(200).send(roomDocs)
                }
            })
            .catch(error => res.status(400).send(error))
    }
};

//Podemos editar nuestra estancia. UPDATE CON PUT
const updateDevice = (req, res) => {
    Room.findByIdAndUpdate(
        req.params.deviceId,
        {
            name: req.body.name,
            // status: req.body.name: haría falta poder cambiar el estado de on a off
            // o incluso cambiar volumen, velocidad...
        }
    )
    .then(deviceDoc => {
        if( deviceDoc === null ){
            res.status(404).send({msg: 'No hemos encontrado este dispositivo.'})
        } else {
            res.status(200).send({msg: 'Dispositivo modificiado!'})
        }
    })
    .catch( error => {
        switch(error.name){
            case 'CastError':
                res.status(400).send({msg: 'Formato de id inválido.'})
                break;
            default :
                res.status(200).send({msg: 'Ha habido un error'})
        }
    })
};

//Eliminamos nuestra estancia. DELETE
const deleteDevice = (req, res) => {
    Room.findOneAndUpdate(
        {
            _id: req.params.deviceId,
            //status: { $ne: "DELETED" }
        }
        ,
        /*
        {
            status: "DELETED",
            deletedAt: new Date()
        }, 
        */
        {
            timestamps: false
        }
        )
        .then(deviceDoc=>{
            console.log(deviceDoc)
            if ( roodeviceDocmDoc === null ) {
                res.status(404).send({msg: "No se ha encontrado este dispositivo."})
            } else {
                res.status(200).send({msg:"Dispositivo eliminada."})   
            }
        })
        .catch(error=>{
            switch (error.name) {
                case 'CastError':
                    res.status(400).send({msg: 'Formato de id inválido'})
                    break;
                default:
                    res.status(400).send(error)
            }
        })
};




module.exports = {
    addDevice,
    getDevices,
    updateDevice,
    deleteDevice,
}