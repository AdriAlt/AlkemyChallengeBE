const models = require("../models");
const Personajes = models.Characters;

exports.createPersonaje = async (req, res) => {
    const { image, name } = req.body;

    try {
        await Personajes.create({ image: image, name: name, age: Date(), weight: weight, history: history});
        res.json({ msg: "Personaje creado correctamente" })
    } catch (error) {
        res.status(400).send("No se pudo crear el personaje");
    }
}

exports.getPersonaje = async (req, res) => {
    const {  } = req.body;

    try {
        await Usuario.create({ userName: userName , password: password, createdAt: new Date(), updatedAt: new Date()});
        res.json({ msg: "Personaje creado correctamente" })
    } catch (error) {
        res.status(400).send("No se pudo crear el personaje");
    }
}