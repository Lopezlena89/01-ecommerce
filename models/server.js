const express = require("express");
const cors = require('cors');
const dbConnection = require('../database/config');


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.path = {
            auth:'/api/auth',
            categoria:'/api/categoria',
            producto:'/api/producto'
        }

        //Middlewares
        this.middlewares();
        
        //Conectar a base de datos
        this.conectarDB();

        //Rutas de la aplicacion
        this.routes();

    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        //Cors;
        this.app.use(cors());
        
        //Lectura del Json
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.path.auth,require('../routes/auth.js'));
        this.app.use(this.path.categoria,require('../routes/categoria.js'));
        this.app.use(this.path.producto,require('../routes/producto.js'));
    }   

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Servidor corriendo en el puerto ${this.port}`)
        })
    }

}

module.exports = Server;