const models = require("../models");
const Personajes = models.Characters;


exports.createPersonaje = async (req, res) => {
    const { image, name, age, weight, history } = req.body;

    try {
        await Personajes.create({ image: image, name: name, age: new Date(age), weight: weight, history: history});
        res.json({ msg: "Personaje creado correctamente" })
    } catch (error) {
        console.log("error", error)
        res.status(400).send("No se pudo crear el personaje");
    }
}

exports.getPersonaje = async (req, res) => {
    try {
        let personajes = await Personajes.findAll({}, {include: models.Movies});
        console.log("upersonajesu", personajes)
        res.send(personajes)
    } catch (error) {
        console.log("personaje", error)
        res.status(400).send("No se pudo encontrar el personaje");
    }
}
exports.putPersonaje = async (req, res) => {

    try {
        const { image, name, age, weight, history } = req.body;

        await Personajes.update({ image: image, name: name, age: new Date(age), weight: weight, history: history}, {where: {id: req.params.id}});
        res.send({msg: "Personaje modificado de forma correcta"})

    } catch (error) {
        console.log("personaje", error)
        res.status(400).send("No se pudo modificar el personaje");
    }
}
exports.deletePersonaje = async (req, res) => {
    try {
        await Personajes.destroy({where: {id: req.params.id}})
        res.send({msg: "Personaje eliminado correctamente"})

    } catch (error) {
        console.log("personaje", error)
        res.status(400).send("No se pudo eliminar el personaje");
    }
}