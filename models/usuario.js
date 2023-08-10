const {Schema,model} = require('mongoose');

const UsuarioSchema = new Schema({

    nombre:{
        type:String,
        required:[true,'El nombre es obligatorio']
    },
    apellido:{
        type:String,
        required:[true,'El apellido es obligatorio']
    },
    correo:{
        type:String,
        required:[true,'El email es obligatorio'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'El password es obligatorio']
    },
    img:{
        type:String
    },
    rol:{
        type:String,
        emun:['ADMIN_ROLE','USER_ROLE']
    },
    estado:{
        type:Boolean,
        default:true
    },
    google:{
        type:Boolean,
        default:false
    }

})

module.exports = model('Usuario',UsuarioSchema);