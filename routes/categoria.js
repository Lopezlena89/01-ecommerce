const Router = require('express');
const {check} = require('express-validator');
const { obtenerCategoria, obtenerCategorias, 
        crearCategoria, actualizarCategoria,
        eliminarCategoria } = require('../controllers/categoria');
const { existeCategoria } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();

//Obtener todas las categorias
router.get('/',obtenerCategoria);
//Obtener una categoria en especifico
router.get('/:id',[
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existeCategoria),
    validarCampos
],obtenerCategorias)
//Crear una categoria
router.post('/',[
    validarJWT,
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    validarCampos
],crearCategoria);
//Actualizar cualquiera con token valido
router.put('/:id',[
    validarJWT,
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('id').custom(existeCategoria),
    validarCampos
],actualizarCategoria);
//Eliminar categoria
router.delete('/:id',[
    validarJWT,
    check('id','No es un ID valido').isMongoId(),
    check('id').custom( existeCategoria ),
    validarCampos
],eliminarCategoria)



module.exports = router;





