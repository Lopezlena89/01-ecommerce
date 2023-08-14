const Categoria = require('../models/categoria');
const Usuario = require('../models/usuario');


const emailExiste = async(correo = '') =>{
    const existeEmail = await Usuario.findOne({correo});
    if(existeEmail){
        throw new Error(`El correo ${correo} ya esta registrado`)
    }

}

const existeCategoria = async(id) =>{

    const categoria = await Categoria.findById(id);

    if(!categoria){
        throw new Error(`El id ${categoria} no existe`)
    }


}


module.exports ={
    emailExiste,
    existeCategoria
}