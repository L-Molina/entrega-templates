const express = require("express");
const { Router } = express;
const router = Router();
const Controller = require("./controllers/handle_controllers.js");

// getAll

router.get("/", (req, res) => {
    res.send(Controller.getAll())
});

//getById

router.get("/:id", (req, res) => {
    const {id} = req.params;
    res.send(Controller.getById(id))
});

//addProduct

router.post("/", (req, res) => {
    res.send(Controller.addProduct(req.body))
});

//updateProduct

router.put("/:id", (req, res) => {
    const {id} = req.params
    const body = req.body
    res.send(Controller.updateProduct(id, body))
});

//deleteProduct

router.delete("api/productos/:id", (req, res) => {
    res.send(Controller.deleteProduct(req.params.id))
});

module.exports = router;