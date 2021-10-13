// Inicio
const express = require('express');
const morgan = require('morgan');
const app = express();

//Settings 
app.set('appName','Proyecto backend');
app.set('port',3000);
app.set('view engine', 'ejs');

//Middlewares
app.use(express.json());

//app.use(morgan('dev'));
app.use(morgan('dev'));

//Query
var house = [
    totalCasas = 10,
    porCrear = 5,
    porDestruir= 3,
    porExandir= 5,
    porReducir= 2    
];

//Routting START
app.all('/city',(req,res,next)=>{
    console.log('Acceso al servidor de la ciudad.');
    next();
})
//Apartado get
app.get ('/city/house',(req, res) =>{
    res.send(house);
});

app.get ('/city/buildig',(req, res) =>{
    res.json([
        totalEdif = 10,
        porCrear = 5,
        porDestruir= 3,
        porExandir= 5,
        porReducir= 2    
    ]);
});

app.get ('/city/apart',(req, res) =>{
    res.json([
        totalAparts = 10,
        porCrear = 5,
        porDestruir= 3,
        porExandir= 5,
        porReducir= 2    
    ]);
});

app.get ('/city/ways',(req, res) =>{
    res.json([
        totalCarret = 10,
        porCrear = 5,
        porDestruir= 3,
        porExandir= 5,
        porReducir= 2    
    ]);
});

app.get ('/city/puentes',(req, res) =>{
    res.json([
        totalPuents = 10,
        porCrear = 5,
        porDestruir= 3,
        porExandir= 5,
        porReducir= 2    
    ]);
});

app.get ('/city/parques',(req, res) =>{
    res.json([
        totalParques = 10,
        porCrear = 5,
        porDestruir= 3,
        porExandir= 5,
        porReducir= 2    
    ]);
});

app.get ('/city/zComer',(req, res) =>{
    res.json([
        totalZcomer = 10,
        porCrear = 5,
        porDestruir= 3,
        porExandir= 5,
        porReducir= 2    
    ]);
});
//Apartado post
app.post ('/city/house',(req, res) =>{
    console.log(req.body);
    let agg = (a,b,c)=>{
       a[c] = parseInt(a[c])+ parseInt(b);  
       console.log (a[c]); 
       res.write(`${a[c]}`);
    }; 
    agg(house,req.body.totalCasas,0);
    agg(house,req.body.porCrear,1);
    agg(house,req.body.porDestruir,2);
    agg(house,req.body.porExandir,3);
    agg(house,req.body.porReducir,4);
    res.end();
});

/*app.get ('/city/buildig',(req, res) =>{
    res.json([
        totalEdif = 10,
        porCrear = 5,
        porDestruir= 3,
        porExandir= 5,
        porReducir= 2    
    ]);
});

app.get ('/city/apart',(req, res) =>{
    res.json([
        totalAparts = 10,
        porCrear = 5,
        porDestruir= 3,
        porExandir= 5,
        porReducir= 2    
    ]);
});

app.get ('/city/ways',(req, res) =>{
    res.json([
        totalCarret = 10,
        porCrear = 5,
        porDestruir= 3,
        porExandir= 5,
        porReducir= 2    
    ]);
});

app.get ('/city/puentes',(req, res) =>{
    res.json([
        totalPuents = 10,
        porCrear = 5,
        porDestruir= 3,
        porExandir= 5,
        porReducir= 2    
    ]);
});

app.get ('/city/parques',(req, res) =>{
    res.json([
        totalParques = 10,
        porCrear = 5,
        porDestruir= 3,
        porExandir= 5,
        porReducir= 2    
    ]);
});

app.get ('/city/zComer',(req, res) =>{
    res.json([
        totalZcomer = 10,
        porCrear = 5,
        porDestruir= 3,
        porExandir= 5,
        porReducir= 2    
    ]);
});*/

app.use(express.static('Principal'));

//Servidor
app.listen(app.get('port'),()=>{
    console.log(`Server active on : ${app.get('port')}`);
});