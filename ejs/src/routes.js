const express = require("express");
const { Router } = express;
const router = Router();
const Controller = require("./controllers/ejs_controllers.js");

// getAll

router.get("/" , (req, res) => {
    res.render('form')
})

router.get("/productos", (req, res) => {
    const productos = Controller.getAll()
    res.render('list', {productos})
});

//getById

router.get("/productos/:id", (req, res) => {
    const {id} = req.params;
    res.send(Controller.getById(id))
});

//addProduct

router.post("/productos", (req, res) => {
    const {name, price, thumbnail} = req.body
    Controller.addProduct({name, price, thumbnail})
    const productos = Controller.getAll()
    res.render('list', {productos})
})

//updateProduct

router.put("/productos/:id", (req, res) => {
    const {id} = req.params
    const body = req.body
    res.send(Controller.updateProduct(id, body))
});

//deleteProduct

router.delete("/productos/:id", (req, res) => {
    res.send(Controller.deleteProduct(req.params.id))
});

module.exports = router;