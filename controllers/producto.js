const Producto = require('../models/producto');

const obtenerProductos = async(req,res) =>{
    const {limite=5,desde=0} = req.query;
    const query = {estado:true}

   const [total,productos] = await Promise.all([
       Producto.countDocuments(query),
       Producto.find(query)
       .populate('usuario','nombre')
       .populate('categoria','nombre')
       .skip(Number(desde))
       .limit(Number(limite))
   ])

    res.status(201).json({
        total,productos
    })


}
const obtenerProducto = async(req,res) =>{

    const {id} = req.params;

    const producto = await Producto.findById(id)
                            .populate('usuario','nombre')
                            .populate('categoria','nombre')

    res.status(201).json({
        producto
    })


}
const crearProducto = async(req,res) =>{

    const nombre = req.body.nombre.toUpperCase();

    const productoExiste = await Producto.findOne({nombre});
    if(productoExiste){
        return res.status(400).json({
            msg:`El producto ${nombre} ya existe en base de datos`
        })
    }

    //Generar data
    const data = {
        nombre,
        categoria:req.body.categoria,
        usuario : req.usuario._id
    }
    const producto = new Producto(data);
    await producto.save();
    res.status(201).json(producto);


}
const actualizarProducto = async(req,res) =>{

    const {id} = req.params;
    const {...data} = req.body;

    if(data.nombre){
        data.nombre = data.nombre.toUpperCase();
    }
    data.usuario = req.usuario._id;

    const producto = await Producto.findByIdAndUpdate(id,data,{new:true});

    res.status(201).json(producto);



}
const eliminarProducto = async(req,res) =>{

    const {id} = req.params;

    const producto = await Producto.findByIdAndUpdate(id,{estado:false},{new:true});

    res.status(201).json(producto);


}

module.exports = {
    obtenerProductos,
    obtenerProducto,
    crearProducto,
    actualizarProducto,
    eliminarProducto
}
