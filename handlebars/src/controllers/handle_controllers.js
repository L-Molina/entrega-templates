const products = require("../products")

class Controller {
    //getAll
    static getAll() {
        return products.productsList()
    };

    //getById
    static getById(id) {
        return products.getProduct(id);
    };

    //addProduct
    static addProduct(product) {
        return products.addProduct(product)
    };

    //updateProduct
    static updateProduct(id, updatedContent) {
        return products.updateProduct(id, updatedContent);
    };

    //deleteProduct
    static deleteProduct(id) {
        return products.deleteProduct(id);
    };
};

module.exports = Controller;