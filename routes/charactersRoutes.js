const express = require('express');
const router = express.Router();
const characterController = require("../controllers/characterControllers");
const { check } = require("express-validator");
const authJwt = require("../middlewares/authJwt")

// crear un personaje
router.post("/",
    authJwt,
    characterController.createPersonaje
);

router.get("/",
    authJwt,
    characterController.getPersonaje
);
router.put("/:id",
    authJwt,
    characterController.putPersonaje
);
router.delete("/:id",
    authJwt,
    characterController.deletePersonaje
);




module.exports = router;