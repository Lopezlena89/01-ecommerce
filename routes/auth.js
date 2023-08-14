const Router = require('express');
const {check} = require('express-validator');
const { loginPost,registerPost,logoutPost } = require('../controllers/auth');
const { emailExiste } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();

router.post('/login',[
    check('correo','El correo es obligatorio').isEmail(),
    check('password','La contraseña es obligatoria').not().isEmpty(),
    validarCampos
],loginPost)
router.post('/register',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('password','El correo debe de tener mas de 6 caracteres').isLength({min:6}),
    check('correo','El correo es obligatorio').isEmail(),
    check('correo').custom(emailExiste),
    validarCampos
],registerPost)
router.post('/logout',logoutPost)


module.exports = router;