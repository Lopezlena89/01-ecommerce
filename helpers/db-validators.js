const Categoria = require('../models/categoria');
const Usuario = require('../models/usuario');
const Producto = require('../models/producto');


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

const existeProducto = async(id) => {
    const producto = await Producto.findById(id);
    if(!producto){
        throw new Error(`El producto ${producto} no existe en BD`)
    }
}


module.exports ={
    emailExiste,
    existeCategoria,
    existeProducto
}