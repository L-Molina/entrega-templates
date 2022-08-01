const express = require('express');
const router = require('./src/routes.js');
const app = express();
const pug = require('pug')
const PORT = 8080;
const datos = require('./src/products.js').productsList();

//plantilla
app.set('view engine', 'pug');
app.set('views','./views');

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", router);

//conectado

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//error

server.on("error", (err) => {
  console.log(`Error del servidor: ${err}`)
})