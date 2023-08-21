

const validarArchivoSubir = require('./validar-archivo');
const validarCampos = require('./validar-campos');
const validarJWT = require('./validar-jwt');


module.exports = {
    ...validarArchivoSubir,
    ...validarCampos,
    ...validarJWT
}