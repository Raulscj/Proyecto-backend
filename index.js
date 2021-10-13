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
var buildig = [
    totalEdif = 10,
    porCrear = 5,
    porDestruir= 3,
    porExandir= 5,
    porReducir= 2
];
var apart =[
    totalAparts = 10,
    porCrear = 5,
    porDestruir= 3,
    porExandir= 5,
    porReducir= 2
];
var ways =[
    totalCarret = 10,
    porCrear = 5,
    porDestruir= 3,
    porExandir= 5,
    porReducir= 2
];
var puentes =[
    totalPuents = 10,
    porCrear = 5,
    porDestruir= 3,
    porExandir= 5,
    porReducir= 2 
];
var parques= [
    totalParques = 10,
    porCrear = 5,
    porDestruir= 3,
    porExandir= 5,
    porReducir= 2 
];
var zComer =[
    totalZcomer = 10,
    porCrear = 5,
    porDestruir= 3,
    porExandir= 5,
    porReducir= 2
]
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
    res.send(buildig);
});

app.get ('/city/apart',(req, res) =>{
    res.send(apart);
});

app.get ('/city/ways',(req, res) =>{
    res.send(ways);
});

app.get ('/city/puentes',(req, res) =>{
    res.send(puentes);
});

app.get ('/city/parques',(req, res) =>{
    res.send(parques);
});

app.get ('/city/zComer',(req, res) =>{
    res.send(zComer);
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
//pendiente por agregar en postman)
app.post ('/city/buildig',(req, res) =>{
    console.log(req.body);
    let agg = (a,b,c)=>{
       a[c] = parseInt(a[c])+ parseInt(b);  
       console.log (a[c]); 
       res.write(`${a[c]}`);
    }; 
    agg(buildig,req.body.totalEdif,0);
    agg(buildig,req.body.porCrear,1);
    agg(buildig,req.body.porDestruir,2);
    agg(buildig,req.body.porExandir,3);
    agg(buildig,req.body.porReducir,4);
    res.end();
});

app.post ('/city/apart',(req, res) =>{
    console.log(req.body);
    let agg = (a,b,c)=>{
       a[c] = parseInt(a[c])+ parseInt(b);  
       console.log (a[c]); 
       res.write(`${a[c]}`);
    }; 
    agg(apart,req.body.totalAparts,0);
    agg(apart,req.body.porCrear,1);
    agg(apart,req.body.porDestruir,2);
    agg(apart,req.body.porExandir,3);
    agg(apart,req.body.porReducir,4);
    res.end();
});

app.post ('/city/ways',(req, res) =>{
    console.log(req.body);
    let agg = (a,b,c)=>{
       a[c] = parseInt(a[c])+ parseInt(b);  
       console.log (a[c]); 
       res.write(`${a[c]}`);
    }; 
    agg(ways,req.body.totalCarret,0);
    agg(ways,req.body.porCrear,1);
    agg(ways,req.body.porDestruir,2);
    agg(ways,req.body.porExandir,3);
    agg(ways,req.body.porReducir,4);
    res.end();
});

app.post('/city/puentes',(req, res) =>{
    console.log(req.body);
    let agg = (a,b,c)=>{
       a[c] = parseInt(a[c])+ parseInt(b);  
       console.log (a[c]); 
       res.write(`${a[c]}`);
    }; 
    agg(puentes,req.body.totalPuents,0);
    agg(puentes,req.body.porCrear,1);
    agg(puentes,req.body.porDestruir,2);
    agg(puentes,req.body.porExandir,3);
    agg(puentes,req.body.porReducir,4);
    res.end();
});

app.post ('/city/parques',(req, res) =>{
    console.log(req.body);
    let agg = (a,b,c)=>{
       a[c] = parseInt(a[c])+ parseInt(b);  
       console.log (a[c]); 
       res.write(`${a[c]}`);
    }; 
    agg(parques,req.body.totalParques,0);
    agg(parques,req.body.porCrear,1);
    agg(parques,req.body.porDestruir,2);
    agg(parques,req.body.porExandir,3);
    agg(parques,req.body.porReducir,4);
    res.end();
});

app.post ('/city/zComer',(req, res) =>{
    console.log(req.body);
    let agg = (a,b,c)=>{
       a[c] = parseInt(a[c])+ parseInt(b);  
       console.log (a[c]); 
       res.write(`${a[c]}`);
    }; 
    agg(zComer,req.body.totalZcomer,0);
    agg(zComer,req.body.porCrear,1);
    agg(zComer,req.body.porDestruir,2);
    agg(zComer,req.body.porExandir,3);
    agg(zComer,req.body.porReducir,4);
    res.end();
});
//Apartado put
/*
app.get ('/city/house',(req, res) =>{
    res.send(house);
});

app.get ('/city/buildig',(req, res) =>{
    res.send(buildig);
});

app.get ('/city/apart',(req, res) =>{
    res.send(apart);
});

app.get ('/city/ways',(req, res) =>{
    res.send(ways);
});

app.get ('/city/puentes',(req, res) =>{
    res.send(puentes);
});

app.get ('/city/parques',(req, res) =>{
    res.send(parques);
});

app.get ('/city/zComer',(req, res) =>{
    res.send(zComer);
});
*/

app.use(express.static('Principal'));

//Servidor
app.listen(app.get('port'),()=>{
    console.log(`Server active on : ${app.get('port')}`);
});