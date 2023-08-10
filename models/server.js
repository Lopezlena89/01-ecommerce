const express = require("express");
const dbConnection = require('../database/config');


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //Conectar a base de datos
        this.conectarDB();

        //Rutas de la aplicacion
        this.routes();

    }

    async conectarDB(){
        await dbConnection();
    }


    routes(){
        this.app.get('/',(req,res)=>{
            res.json({
                msg:'Hola mundo!!'
            })
        })
    }   

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Servidor corriendo en el puerto ${this.port}`)
        })
    }

}

module.exports = Server;