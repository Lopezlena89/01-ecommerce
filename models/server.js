const express = require("express");
const cors = require('cors');
const dbConnection = require('../database/config');
const fileUpload = require("express-fileupload");


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.path = {
            auth:'/api/auth',
            categoria:'/api/categoria',
            producto:'/api/producto',
            buscar:'/api/buscar',
            uploads:'/api/uploads'
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

        //Carga de archivos
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/'
        }));

    }

    routes(){
        this.app.use(this.path.auth,require('../routes/auth.js'));
        this.app.use(this.path.categoria,require('../routes/categoria.js'));
        this.app.use(this.path.producto,require('../routes/producto.js'));
        this.app.use(this.path.buscar,require('../routes/buscar.js'));
        this.app.use(this.path.uploads,require('../routes/uploads.js'));
    }   

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Servidor corriendo en el puerto ${this.port}`)
        })
    }

}

module.exports = Server;