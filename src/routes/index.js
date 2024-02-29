const express = require('express');
const routeInformacion = require('./informacion.route');
const routerinformacionImg = require('./informacionImg.module');
const routeInformacionProyeco = require('./informacionProyecto.route');

const routeImgProyectoBackEnd = require('./imgProyectoBackEnd.route');
const routeImgProyectoFrontEnd = require('./imgProyectoFrontEnd');
const routeLenguaje = require('./lenguaje.routes');
const router = express.Router();

// colocar las rutas aquí
router.use("/informacion",routeInformacion)
router.use("/informacionImg",routerinformacionImg)

router.use("/proyecto/informacionProyect",routeInformacionProyeco)
router.use("/proyecto/imgProyectoFrontEnd",routeImgProyectoFrontEnd)
router.use("/proyecto/lenguaje",routeLenguaje)
router.use("/proyecto/imgProyectoBackEnd",routeImgProyectoBackEnd)


module.exports = router;