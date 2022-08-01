const express = require("express");
const router = require("./src/routes.js")
const app = express();
const PORT = 8080;
const datos = require("./src/products.js").productsList();

//plantilla

app.set("views", "./views");
app.set("view engine", "ejs");

//middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

//connected

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));