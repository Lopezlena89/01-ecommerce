const express = require("express");



class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //Rutas de la aplicacion
        this.routes();

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