const jwt = require("jsonwebtoken");


module.exports = function(req, res, next) {

    // Leer el token del header
    const token = req.header('x-auth-token');

    // Revisar si no hay token
    if(!token) {
        return res.status(400).json({msg: 'No hay token, permiso no válido' })
    }
    // validar el token
    try {
        jwt.verify(token, 'SECRETA');
        next()
    } catch (error) {
        console.log('error', error)
        res.status(401).json({msg: 'Token no válido'})
    }
}