const express = require("express");
const cors = require('cors');
const dbConnection = require('../database/config');


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.path = {
            auth:'/api/auth'
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
        this.app.use(cors({
            origin:'http://localhost:5173'
        }));
        
        //Lectura del Json
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.path.auth,require('../routes/auth.js'));
    }   

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Servidor corriendo en el puerto ${this.port}`)
        })
    }

}

module.exports = Server;