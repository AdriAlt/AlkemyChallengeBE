const express = require('express');
const router = express.Router();
const characterController = require("../controllers/characterControllers");
const { check } = require("express-validator");
const authJwt = require("../middlewares/authJwt")

// crear un personaje
router.post("/",
    characterController.createPersonaje
);

router.get("/",
    //authJwt,
    characterController.getPersonaje
);




module.exports = router;