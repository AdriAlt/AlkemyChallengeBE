// const db = require("../models/usuario.model");
// const Usuario = db.Usuario;

// const User = db.Sequelize.User;

// exports.create = (req, res) => {

//     // Create a USUARIO
//     const usuario = {
//       name: req.body.name,
//       password: req.body.password
//     };
  
//     // Save Usuario in the database
//     Usuario.create(usuario)
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message 
//         });
//       });
//   };