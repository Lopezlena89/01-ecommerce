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

const coleccionesPermitidas = (coleccion = '',colecciones = []) =>{

    const incluida = colecciones.includes(coleccion);
    if(!incluida){
        throw new Error(`La coleccion  ${coleccion} no es permitida ${colecciones}`)
    }

    return true;

}


module.exports ={
    emailExiste,
    existeCategoria,
    existeProducto,
    coleccionesPermitidas
}