const express = require('express');
const chalk = require('chalk');

const cors = require('cors');

// crear el servidor
const app = express();

// Conectar a la base de datos
const db = require("./models/index");
db.sequelize.sync();

// habilitar cors
app.use(cors());

// Habilitar express.json
app.use(express.json({ extended: true }));

// puerto de la app
const PORT = process.env.PORT || 4000;

//pagina principal
app.get("/", (req, res) => {
  res.send("Hola mundo")
})

// Importar rutas
app.use("/auth", require("./routes/authRoutes"));
app.use("/characters", require("./routes/charactersRoutes"));

//arrancar la app
app.listen(PORT, '0.0.0.0', () => {
    console.log(chalk.blueBright(`El servidor esta funcionando en el puerto ${PORT}`));
  });