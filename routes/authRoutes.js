// rutas para crear usuarios
const express = require('express');
const router = express.Router();
const authController = require("../controllers/authController");
const { check } = require("express-validator");
const authJwt = require("../middlewares/authJwt")

// crear un usuario
router.post("/",
    authController.registerUsuario
);
// login
router.get("/",
    //authJwt,
    authController.loginUsuario
);




module.exports = router;