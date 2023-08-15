const Router = require('express');
const { check } = require('express-validator');
const { obtenerProductos, 
        obtenerProducto, 
        crearProducto, 
        actualizarProducto, 
        eliminarProducto } = require('../controllers/producto');
const { existeCategoria, existeProducto } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.get('/',obtenerProductos)
router.get('/:id',obtenerProducto)
router.post('/',[
    validarJWT,
    check('nombre','El nombre debe de ser obligatorio').not().isEmpty(),
    check('categoria','La categoria debe de tener un MONGO ID').isMongoId(),
    check('categoria').custom(existeCategoria),
    validarCampos
],crearProducto)
router.put('/:id',[
    validarJWT,
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('id').custom(existeProducto),
    validarCampos
],actualizarProducto)
router.delete('/:id',[
    validarJWT,
    check('id','El id debe de ser valido').isMongoId(),
    check('id').custom(existeProducto),
    validarCampos
],eliminarProducto)


module.exports = router;
