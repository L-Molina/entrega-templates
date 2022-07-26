const products = [
    {
        "title": "Fideos",
        "price": 150,
        "thumbnail": "https://www.recetas-argentinas.com/base/stock/Recipe/41-image/41-image_web.jpg"
    },
    {
        "name": "Hamburguesa",
        "price": 680,
        "thumbnail": "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2020/04/recetas-de-hamburguesas-caseras-de-carne-molida.jpg"
    },
    {
        "title": "Milanesas con Papas",
        "price": 230,
        "thumbnail": "https://astelus.com/wp-content/viajes/Plato-de-milanesa-con-papas-ti%CC%81pico-de-Argentina.jpg"
    }
];
let id = 1;

const productsList = () => {
    return products
};

const getProduct = (id) => {
    return (products.find(product => product.id === parseInt(id)) || { error: 'Product not Found' })
};

const addProduct = (product) => {
    const prod = {
        id: id,
        name: product.name,
        price: product.price,
        thumbnail: product.thumbnail
    }
    products.push(prod)
    id++
};

const updateProduct = (id, updatedContent) => {
    const product = getProduct(parseInt(id));
    if ((product.id == id) && (product.id != null)) {
        product.name = updatedContent.name;
        product.price = updatedContent.price;
        product.thumbnail = updatedContent.thumbnail;
        return product
    } else {
        return "Product not Found"
    }
};

const deleteProduct = (id) => {
    const product = getProduct(parseInt(id));
    if ((product.id == id) && (product.id != null)) {
        products.splice(products.indexOf(product), 1);
        return "Successfully Deleted Product"
    } else {
        return "Product not Found"
    }
};

module.exports = { productsList, getProduct, addProduct, updateProduct, deleteProduct };