const Room = require ('../models/roomModel/roomModel.js')

const addRoom = (req,res)=>{
    console.log(req.body);
    Room.create(
        {
            room: req.body.name
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

module.exports ={
    addRoom
}