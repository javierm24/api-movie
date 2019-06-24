const mongoose = require('mongoose');
// http://localhost:1234/books/
mongoose.connect('mongodb://localhost:27017/videoclub', { useNewUrlParser: true });
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const { clientModel } = require('./models/modelcliente.js')
const { movieModel } = require('./models/modelmovie.js')



app.post('/clientes', (req, res) => {

   let client = new clientModel({ nombre: req.body.nombre, apellidos: req.body.apellidos });
   client.save()
   res.send("todo ok")

})

app.post('/movies', (req, res) => {

   let movies = new movieModel({ titulo: req.body.titulo, director: req.body.director, genero: req.body.genero, date: req.body.date, stock: req.body.stock });
   movies.save()
   res.send("todo ok")

})

app.get('/clientes', async (req, res) => {
   let result = await clientModel.find()
   res.send(result);
})

app.get('/movies', async (req, res) => {
   let result = await movieModel.find()
   res.send(result);
})

app.put('/movies/:id', function (req, res) {
   movieModel.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
      res.send('ACTUALIZADO')
   })
})

app.put('/clientes/:id', function (req, res) {
   clientModel.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
      res.send('ACTUALIZADO')
   })
})

app.delete('/movies/:id', function (req, res) {
   movieModel.findByIdAndDelete({ _id: req.params.id }).then(function () {
      res.send('ELIMINADO')
   })
})

app.delete('/clientes/:id', function (req, res) {
   clientModel.findByIdAndDelete({ _id: req.params.id }).then(function () {
      res.send('ELIMINADO')
   })
})

app.listen(3000, () => {
   console.log("3000");
})


