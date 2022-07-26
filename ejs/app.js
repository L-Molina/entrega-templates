const express = require("express");
const router = require("./src/routes.js")
const app = express();
const PORT = 8080;
const datos = require("./src/products.js").productsList();

//middleware

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/productos', router);
app.get('/', (req, res) => {
  res.render('form', {datos})
});

//connected

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));