const Categoria = require("../models/categoria");


const obtenerCategoria = (req,res) => {

}
const obtenerCategorias = (req,res) => {

}
const crearCategoria = async(req,res) => {
    
    const nombre = req.body.nombre.toUpperCase();

    const categoriaDB =  await Categoria.findOne({nombre});

    if(categoriaDB){
        return res.status(400).json({
            msg:`La categoria ${categoriaDB.nombre} ya existe`
        })
    }
    //Generar Data a guardar
    const data = {
        nombre,
        usuario:req.usuario._id
    }

    const categoria = new Categoria(data);

    await categoria.save()

    res.status(201).json(categoria);

}
const actualizarCategoria = (req,res) => {

}
const eliminarCategoria = (req,res) => {

}


module.exports = {
    obtenerCategoria,
    obtenerCategorias,
    crearCategoria,
    actualizarCategoria,
    eliminarCategoria
}