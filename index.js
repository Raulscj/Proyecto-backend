// Inicio
const express = require('express');
const morgan = require('morgan');
const app = express();

//Settings
app.set('appName', 'Proyecto backend');
app.set('port', 3000);
//app.set('view engine', 'ejs');

//Middlewares
app.use(express.json());

//app.use(morgan('dev'));
app.use(morgan('dev'));

//Query
const data = {
	house: [
		{
			ID_h: 1,
			hab: 3,
			creada: true,
			porDestruir: false,
			porExandir: true,
		},
	],
	buildig: [
		{
			ID_b: 1,
			pis: 3,
			name: 'Valera',
			creado: true,
			porDestruir: false,
			porExandir: true,
		},
	],
	apart: [
		{
			ID_a: 1,
			pis: 3,
			name: 'Doña Barbara',
			creado: true,
			porDestruir: false,
			porExandir: true,
		},
	],
	ways: [
		{
			ID_w: 1,
			canales: 3,
			name: 'Av Bolivar',
			creado: true,
			porDestruir: false,
			porExandir: true,
		},
	],
	puentes: [
		{
			ID_pu: 1,
			name: 'Bolivar',
			creado: true,
			porDestruir: false,
			porExandir: true,
		},
	],
	parques: [
		{
			ID_pa: 1,
			name: 'Simon Bolivar',
			creado: true,
			porDestruir: false,
			porExandir: true,
		},
	],
	zComer: [
		{
			ID_pa: 1,
			nLocals: 20,
			pis: 5,
			name: 'CC PLAZA',
			creado: true,
			porDestruir: false,
			porExandir: true,
		},
	],
};

//Routting START

//Apartado get
app.get('/city/house',(req, res) =>{
    res.json(data.house);
    
});

app.get('/city/buildig', (req, res) => {
	res.json(data.buildig);
});

app.get('/city/apart', (req, res) => {
	res.json(data.apart);
});

app.get('/city/ways', (req, res) => {
	res.json(data.ways);
});

app.get('/city/puentes', (req, res) => {
	res.json(data.puentes);
});

app.get('/city/parques', (req, res) => {
	res.json(data.parques);
});

app.get('/city/zComer', (req, res) => {
	res.json(data.zComer);
});

//Apartado post
app.post('/city/house', (req, res) => {
	data.house.push(req.body);
    console.log('Dato Agregado');
    console.log(req.body);
    res.status(200).send('Dato agregado en la base de casa exitosamente');
});
//pendiente por agregar en postman)
app.post('/city/buildig', (req, res) => {
	data.buildig.push(req.body);
    console.log('Dato Agregado');
    console.log(req.body);
    res.status(200).send('Dato agregado en la base de edificios exitosamente');
});

app.post('/city/apart', (req, res) => {
	data.apart.push(req.body);
    console.log('Dato Agregado');
    console.log(req.body);
    res.status(200).send('Dato agregado en la base de apartamentos exitosamente');
});

app.post('/city/ways', (req, res) => {
	data.ways.push(req.body);
    console.log('Dato Agregado');
    console.log(req.body);
    res.status(200).send('Dato agregado en la base de carreteras exitosamente');
});

app.post('/city/puentes', (req, res) => {
	data.puentes.push(req.body);
    console.log('Dato Agregado');
    console.log(req.body);
    res.status(200).send('Dato agregado en la base de puentes exitosamente');
});

app.post('/city/parques', (req, res) => {
	data.parques.push(req.body);
    console.log('Dato Agregado');
    console.log(req.body);
    res.status(200).send('Dato agregado en la base de parques exitosamente');
});

app.post('/city/zComer', (req, res) => {
	data.zComer.push(req.body);
    console.log('Dato Agregado');
    console.log(req.body);
    res.status(200).send('Dato agregado en la base de centros comerciales exitosamente');
});

//Apartado put

app.put('/city/house/params/:dataID', (req, res) => {
    var error_log = 0;
	for (let i = 0; i < data.house.length; i++) {
        if (data.house[i].ID_h == req.params.dataID) {
            data.house[i] = req.body;
			//data.house[data.house.indexOf(i)] = req.body;
            res.status(200).send(`ID numero ${req.params.dataID} encontrado y editado correctamente :D`)
        }
        if (data.house[i].ID_h != req.params.dataID) {
            error_log += 1;
        }
    }
    if (error_log == data.house.length) {
        res.status(404).send('el dato a editar no ha sido encontrado, asegurese que el id ' + req.params.dataID + ' exista');
    }
});

app.put ('/city/buildig/params/:dataID', (req, res) => {
    var error_log = 0;
	for (let i = 0; i < data.house.length; i++) {
        if (data.house[i].ID_h == req.params.dataID) {
            data.house[i] = req.body;
			//data.house[data.house.indexOf(i)] = req.body;
            res.status(200).send(`Dato numero ${req.params.dataID} encontrado y editado correctamente :D`)
        }
        if (data.house[i].ID_h != req.params.dataID) {
            error_log += 1;
        }
    }
    if (error_log == data.house.length) {
        res.status(404).send('el dato a editar no ha sido encontrado, asegurese que el id ' + req.params.dataID + ' exista');
    }
});

/*app.put ('/city/apart',(req, res) =>{
    res.send(apart);
});

app.put ('/city/ways',(req, res) =>{
    res.send(ways);
});

app.puts ('/city/puentes',(req, res) =>{
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
app.listen(app.get('port'), () => {
	console.log(`Server active on : ${app.get('port')}`);
});