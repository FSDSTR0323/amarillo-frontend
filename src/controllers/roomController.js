const Room = require('../models/roomModel.js');


//Samuel: hay que indicar de qué casa es la habitación al hacer las peticiones
// En el roomModel habría que indicar a qué casa pertenece cada una de las habitaciones

//Añadimos una nueva estancia
const addRoom = (req,res)=>{
    console.log(req.body);
    Room.create(
        {
            name: req.body.name
        }
    )
    .then( roomDoc=>res.status(200).send({msg:"Habitación añadida"}))
    .catch(error=>{
        console.error(error.code);
        switch(error.code){
            case 11000:
                res.status(400).send({msg: "Error 11.000: Esta habitación ya existe. No puedes duplicarla"})
                break;
            default :
            res.status(400).send(error);
        }
    })
};


//Consultamos nuestras habitaciones. GET
const getRooms = (req, res) => {
    if(req.params.roomId){ //al llamar al roomId, tenemos que hacer el método findById.
        Room.findById(req.params.roomId)
            .then( roomDoc => { //En este punto tenemos que pensar en si existirá o no la task con ese ID, accediendo a roomDoc
                if(roomDoc === null ) {
                    res.status(400).send({msg: 'Esta estancia no existe.'})
                } else {
                    res.status(200).send( roomDoc )
                }
            })
            .catch( error => {  //De esta manera podemos controlar el hecho de que el error sea debido a un ID inválido
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
const updateRoom = (req, res) => {
    Room.findByIdAndUpdate(
        req.params.roomId,
        {
            name: req.body.name,
        }
    )
    .then(roomDoc => {
        if( roomDoc === null ){
            res.status(404).send({msg: 'No hemos encontrado esta estancia.'})
        } else {
            res.status(200).send({msg: 'Estancia modificiada!'})
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
    //res.status(200).send({msg: 'Estancia modificada correctamente!'})
};



//Eliminamos nuestra estancia. DELETE
const deleteRoom = (req, res) => {
    Room.findOneAndUpdate(
        {
            _id: req.params.roomId,
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
        .then(roomDoc=>{
            console.log(roomDoc)
            if ( roomDoc === null ) {
                res.status(404).send({msg: "No se ha encontrado esta estancia."})
            } else {
                res.status(200).send({msg:"Estancia eliminada."})   
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
    addRoom,
    getRooms,
    updateRoom,
    deleteRoom,
}