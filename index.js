// Inicio
const express = require('express');
const morgan = require('morgan');
const app = express();

//Settings 
app.set('appName','Proyecto backend');
app.set('port',3000);

//Middlewares
app.use(express.json());
app.use(morgan('dev'));

//Routting

app.use(express.static('Principal'));

//Servidor
app.listen(app.get('port'),()=>{
    console.log("Server active on : " + app.get('port'));
});