const models = require("../models");
const Usuario = models.Users;
const jwt = require("jsonwebtoken");


// let validateUser = Usuario.findOne({ where: { userName: userName, password: password } })
        // console.log("validate", validateUser)
        // if(validateUser === null){ return res.status(400).json({ msg: "El usuario ya existe "})}

exports.registerUsuario = async (req, res) => {
    const { userName, password } = req.body;

    try {
        await Usuario.create({ userName: userName , password: password, createdAt: new Date(), updatedAt: new Date()});
        res.json({ msg: "Usuario creado correctamente" })
    } catch (error) {
        res.status(400).send("No se pudo crear el usuario");
    }
}

exports.loginUsuario = async (req, res) => {
    try {
        // Check if user exists
       let usuario = await Usuario.findOne({ where: {userName: req.body.userName }});

       if (!usuario) { return res.status(404).json({ msg: "El usuario no existe"});}

        console.log("usu", usuario.dataValues)
  
        let token = jwt.sign({ id: usuario.dataValues.id }, "SECRETA", {
            expiresIn: 3600000 // esto son segundos 1hr
        })
        res.status(200).json({
            id: usuario.dataValues.id,
            userName: usuario.dataValues.userName,
            token: token,
        })

    } catch (error) {
        res.status(500).json({msg: "Hubo un error en el inicio de sesión"});
    }
}