var express = require('express');
var router = express.Router();

//const data = require('../userData');
//const methods = require('../methods');

//rutas
const registerRoute = "../views/pages/register";
const loginRoute = "../views/pages/login";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Programacion Computacional IV' });
});

router.get('/register', (req, res) => {
  res.render(registerRoute)
});
router.get('/login', (req, res) => {
  res.render(loginRoute)
});

module.exports = router;



//encriptamos password
//const hashedPassword = methods.getHashedPassword(password);

//actualizar el array con el nuevo registro
//data.data.push({
  //fullname,
  //email,
  //password: hashedPassword
//});
//res.render(loginRoute, {
  //message: "El registro se ha completado",
  //messageClass: "alert-success"
//});

