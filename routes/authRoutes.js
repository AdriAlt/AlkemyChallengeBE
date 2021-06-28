// rutas para crear usuarios
const express = require('express');
const router = express.Router();
const authController = require("../controllers/authController");

// crear un usuario
router.post("/register",
    authController.registerUsuario
);
// login
router.get("/login",
    authController.loginUsuario
);
router.delete("/:id",
    authController.deleteUsuario
);




module.exports = router;