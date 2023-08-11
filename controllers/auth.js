const Usuario = require("../models/usuario");
const bcryptjs = require('bcryptjs');
const { generarJWT } = require("../helpers/generar-jwt");



const loginPost = async(req,res) =>{

    const {correo,password} = req.body;
    try {
        
        
        const usuario = await Usuario.findOne({ correo });
        //Verificar si el correo existe
        if(!usuario){
            return res.status(500).json({
                msg:'Usuario / Password no son correctos - Correo'
            })
        }

        //Verificar el estado
        if(!usuario.estado){
            return res.status(500).json({
                msg:'No existe el usuario'
            })
        }

        //Vericiar contraseña

        const validPassword = bcryptjs.compareSync(password,usuario.password);
        if(!validPassword){
            return res.status(500).json({
                msg:'Usuario / Password no son correctos - Password'
            })
        }

        //Generar JWT
        const token = await generarJWT(usuario.id);

        res.json({
            usuario,token
        })

        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg:'Hable con el administrador'
        })
    }


    
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