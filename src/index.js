const express = require("express");
const app = express();
const morgan = require("morgan");
const PORT = process.env.PORT || 3000;

// 1) settings
app.set("port", PORT); //settings  // process.env.PORT encaso de que alla otro puerto en la nube pues q lo tome 


// 2) middelwelgit status
app.use(morgan("dev")); //middelwel morgan es una funcion  y me permite ver por con sola lo que va llegando al servidor
// el metodo  app.use(morgan('combined')) nos da mas informacion de donde y como se esta haciendo la peticion
app.use(express.urlencoded({ extended: false })); // entender datos que viende de Formularios
app.use(express.json()); // para soportar formato json y entenderlos

// 4 router
app.use('/api/test',require('./routes/index')) // '/api/test' espara que las rutas empiecen con el nombre de api opcional
app.use('/api/movies',require('./routes/movies'))
app.use('/api/coments',require('./routes/coments'))


// 3) startting server
//app.get('port') variable que cree en la linea 6 y solo la estoy utilizabdo en el listening
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});



 
