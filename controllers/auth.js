const Usuario = require("../models/usuario");
const bcryptjs = require('bcryptjs');


const loginPost = async(req,res) =>{
    res.json({
        msg:'login-Google'
    })
}
const googlePost = async(req,res) =>{
    res.json({
        msg:'Post-Google'
    })
}
const registerPost = async(req,res) =>{


    const {nombre,apellido,correo,password} = req.body;

    try {
        //Creando usuario
        const usuario = new Usuario({nombre,apellido,correo,password});


        //Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        usuario.password = bcryptjs.hashSync(password,salt);

        //Guardar DB
        await usuario.save();

        res.json({
            usuario
        })
    } catch (error) {
        res.status(400).json(error)
    }
        

   
}


module.exports ={
    loginPost,
    googlePost,
    registerPost,

}