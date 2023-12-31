const {Router} = require('express');
const { check } = require('express-validator');
const { cargarArchivo,mostarImagen, actualizarImagenCloudinary } = require('../controllers/uploads');
const { coleccionesPermitidas } = require('../helpers');

const {validarCampos,validarArchivoSubir} = require('../middlewares');

const router = Router();

router.post('/',validarArchivoSubir,cargarArchivo);

router.put('/:coleccion/:id',[
    validarArchivoSubir,
    check('id','El Id debe ser de mongoDB').isMongoId(),
    check('coleccion').custom(c => coleccionesPermitidas( c,['usuarios','productos'] )),
    validarCampos
],actualizarImagenCloudinary)

router.get('/:coleccion/:id',[
    check('id','El Id debe ser de mongoDB').isMongoId(),
    check('coleccion').custom(c => coleccionesPermitidas( c,['usuarios','productos'] )),
    validarCampos
],mostarImagen)


module.exports = router;





