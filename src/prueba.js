//solicito librería express instalada en dependencias del proyecto
const express = require('express')
//instancio express
const app = express()
//número de puerto
const PORT = 8080
//importo módulo router desde router.js
const router = require('./router')

//middleware
//especifica que el objeto req.body puede contener otros tipos de datos además de strings
app.use(express.urlencoded({extended: true}))
//para contenido estático, se indica la ruta donde se encuentran estos archivos, en este caso el form.html
app.use('/static', express.static(__dirname + 'public'))
//intermediario interpretar archivos JSON
app.use(express.json())
//intermediario router
app.use('/api/products', router)

//conexión exitosa
//levanto server en el puerto especificado
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
})
//error
//capturo el error
server.on("error", (err) => {
    //log mensaje de error
    console.log( `Se produjo un error: ${error}`)
    `Se produjo un error:${error}`
})

//requiero librería express instalada en dependencias del proyecto
const express = require('express');
//requiero el Router de express
const {Router} = express
//instancion el Router
const router = Router()
//importo controllers desde ./controllers.js
const controllers = require('./controllers');

/*Rutas*/

//cargar producto
//configurar ruta './', método POST (el cliente agrega contenido)
router.post('/', (req, res) => {
    //declaro newData con los valores ingresados desde el formulario form.html
    const newData = req.body
    //envío respuesta invocando método addNewProduct de la clase controllers importada desde controllers.js
    //le paso los datos ingresados por el cliente en la solicitud como argumento
    res.send(controllers.addNewProduct(newData))
    //log solicitud POST exitosa
    console.log('POST request succesful');
})
//buscar producto por id
//configurar ruta './', método GET (el cliente solicita contenido)
router.get('/:id', (req, res) => {
    //obtengo el valor "id" de los parámetros de ruta de la solicitud /id
    const {id} = req.params
    //envío respuesta invocando método getProductById de la clase controllers importada desde controllers.js
    //le paso los datos ingresados por el cliente en la solicitud como argumento
    res.send(controllers.getProductById(id))
    //log solicitud GET exitosa
    console.log('GET request succesful')
})
//ver producto al azar
//configurar ruta './random', método GET (el cliente solicita contenido)
router.get('/random', (req, res) => {
    //envío respuesta invocando método getRandomProduct de la clase controllers importada desde controllers.js
    res.send(controllers.getRandomProduct())
    //log solicitud GET exitosa
    console.log('GET request succesful')
})
//ver todos los productos
//configurar ruta './all', método GET (el cliente solicita contenido)
router.get('/all', (req, res) => {
    //envío respuesta invocando método getAllProducts de la clase controllers importada desde controllers.js
    res.send(controllers.getAllProducts())
    //log solicitud GET exitosa
    console.log('GET request succesful')
})
//modificar producto
//configurar ruta './:id', método PUT (el cliente modifica contenido existente)
router.put('/:id', (req, res) => {
    //obtengo el valor "id" de los parámetros de ruta de la solicitud /id
    const {id} = req.params
    //declaro newData con los valores ingresados desde el formulario form.html
    const newData = req.body
    //envío respuesta invocando método updateProduct de la clase controllers importada desde controllers.js
    //le paso los datos ingresados por el cliente en la solicitud como argumento
    res.send(controllers.updateProduct(id, newData))
    //log solicitud PUT exitosa
    console.log('PUT request succesful')
})
//eliminar producto
//configurar ruta './:id', método DELETE (el cliente elimina contenido existente)
router.delete('/:id', (req, res) => {
    //obtengo el valor "id" de los parámetros de ruta de la solicitud /id
    const {id} = req.params
    //envío respuesta invocando método deleteProductById de la clase controllers importada desde controllers.js
    //le paso los datos ingresados por el cliente en la solicitud como argumento
    res.send(controllers.deleteProductById(id))
    //log solicitud DELETE exitosa
    console.log('DELETE request succesful')
})
//eliminar todos
//configurar ruta './noProducts', método DELETE (el cliente elimina contenido existente)
router.delete('/noProducts', (req, res) => {
    //envío respuesta invocando método deleteAllProducts de la clase controllers importada desde controllers.js
    res.send(controllers.deleteAllProducts())
    //log solicitud DELETE exitosa
    console.log('DELETE request succesful')
})

//Exporto módulo router para usar en server.js
module.exports = router

//importo funciones desde ./products.js
const products = require("./products");

//declaro clase Controllers
class Controllers {
  //método para agregar nuevo producto
  //se le pasan como argumento los datos ingresados desde form.html 
  static addNewProduct(product){
    //retorno función save importada desde products.js con datos ingresados desde form.html como argumento
    return products.save(product);
  }
  //método para buscar un determinado producto
  //se le pasan como argumento los datos ingresados como param de la ruta solicitada
  static getProductById(id){
    //retorno función getById importada desde products.js con datos ingresados como param de la ruta solicitada como argumento
    return products.getById(id);
  }
  //método para buscar un producto al azar
  static getRandomProduct(){
    //retorno función getRandom importada desde products.js
    return products.getRandom();
  }
  //método para solicitar todos los productos
  static getAllProducts(){
    //retorno función getAll importada desde products.js
    return products.getAll();
  }
  //método para modificar un determinado producto
  //se le pasan como argumento los datos ingresados como param de la ruta solicitada y los datos ingresados desde form.html
  static updateProduct(id, updatedData){
    //retorno función getById importada desde products.js con datos ingresados como param de la ruta solicitada y atos ingresados desde form.html como argumento
    return products.update(id, updatedData);
  }
  //método para eliminar un determinado producto
  //se le pasan como argumento los datos ingresados como param de la ruta solicitada
  static deleteProductById(id){
    //retorno función deleteById importada desde products.js con datos ingresados como param de la ruta solicitada como argumento
    return products.deleteById(id);
  }
  //método para eliminar todos los productos
  static deleteAllProducts(){
    //retorno función deleteAll importada desde products.js
    return products.deleteAll();
  }
}

//Exporto módulo router para usar en server.js
module.exports = Controllers;

const fs = require('fs')

let productOne = {
    title : 'productoUno',
    price : 'precioUno',
    image : './imagenUno.jpg',
}

let productTwo = {
    title : 'productoDos',
    price : 'precioDos',
    image : './imagenDos.jpg',
}

let productThree = {
    title : 'productoTres',
    price : 'precioTres',
    image : './imagenTres.jpg',
}

let productFour = {
    title : 'productoCuatro',
    price : 'precioCuatro',
    image : './imagenCuatro.jpg',
}

let productFive = {
    title : 'productoCinco',
    price : 'precioCinco',
    image : './imagenCinco.jpg',
}

let productList = []
fs.writeFileSync('./productos.txt', JSON.stringify(productList, null, 2), 'utf-8')

/*Funciones*/

//obtener id máxima guardada
//argumento de la función: datos leídos desde el archivo fs
function idCompare(data) {
    //declaro variable currentMaxId
    let currentMaxId = 0
    //declaro variable idsToCompare como array vacío
    let idsToCompare = []
    //por cada elemento del array recibido desde el archivo fs
    data.forEach(element => {
        //agrego el valor guardado en la propiedad "id" al array idsToCompare
        idsToCompare.push(element.id)
        //si el array idsToCompare está vacío
        if(idsToCompare.length == 0) {
            //entonces currentMaxId vale 0
            currentMaxId = 0
        //si idsToCompare no está vacío
        } else {
            //busco el mayor valor entre los elementos contenidos en el array idsToCompare
            //lo guardo como currentMaxId
            currentMaxId = Math.max(...idsToCompare)
        }
        //retorno currentMaxId para usarlo en la función idCompare
        return currentMaxId
    })
    //retorno currentMaxId para usarlo en las funciones save o update
    return currentMaxId
}
//cargar nuevo producto
//datos recibidos desde el formulario html
function save(product) {
    //leo archivo fs para obtener el array de productos, lo guardo en productData
    const productData = JSON.parse(fs.readFileSync('./productos.txt', 'utf-8'))
    //idCompare(productData)
    //llamo función idCompare con productData como argumento
    let currentMaxId = 0
    let idsToCompare = []
    data.forEach(element => {
        idsToCompare.push(element.id)
        if(idsToCompare.length == 0) {
            currentMaxId = 0
        } else {
            currentMaxId = Math.max(...idsToCompare)
        }
        return currentMaxId
    })
    //declaro objeto newProduct
    const newProduct = {
        //recibo el valor de la propiedad id desde idCompare, sumado 1
        id: currentMaxId + 1,
        //los demas valores se reciben del formulario html
        name: product.name,
        price: product.price,
        thumbnail: product.thumbnail
    }
    //declaro newProductList como array, guardo el contenido del array recibido desde fs y le agrego el objeto newProduct
    const newProductList = [...productData, newProduct]
    //log de lista actual de productos guardados
    console.log(newProductList);
    //sobreescribo el archivo fs con el array newProductList
    fs.writeFileSync('./productos.txt', JSON.stringify(newProductList, null, 2), 'utf-8')
    //retorno el objeto newProduct
    return newProduct
}
//buscar producto por id
//buscar un producto de la lista por su valor de id
function getById(id) {
    //leo archivo fs para obtener el array de productos, lo guardo en productData
    const productData = JSON.parse(fs.readFileSync('./productos.txt', 'utf-8'))
    //declaro variable requestedProduct vacía
    let requestedProduct = ''
    //para cada elemento del array productData
    productData.forEach(element => {
        //si el valor de id del elemento es igual al valor de id solicitado
        if(element.id == id) {
            //sobreescribo requestedProduct como ese elemento
            requestedProduct = element
        //de lo contrario
        } else {
            //sobreescribo requestedProduct como string "La búsqueda no arrojó ningún resultado."
            requestedProduct = 'La búsqueda no arrojó ningún resultado.'
        }
        //retorno requestedProduct
        return requestedProduct
    })
    //log del producto buscado 
    console.log(requestedProduct);
    //retorno requestedProduct
    return requestedProduct
}
//ver producto al azar
function getRandom() {
    //leo archivo fs para obtener el array de productos, lo guardo en productData
    const productData = JSON.parse(fs.readFileSync('./productos.txt', 'utf-8'))
    //si el array productData está vacío
    if (productData.length == 0) {
        //log "No se encontraron productos."
        console.log('No se encontraron productos.')
        //retorno string "No se encontraron productos"
        return 'No se encontraron productos.'
    }
    //declaro variable randomNumber con un valor al azar con el largo del array productData como rango
    let randomNumber = Math.floor(Math.random() * productData.length)
    //declaro variable requestRandom, tomo como valor el elemento del array productData cuyo número de índice es randomNumber
    let requestRandom = productData[randomNumber]
    //log del producto al azar encontrado
    console.log('Producto: ' + JSON.stringify(requestRandom));
    //retorno requestRandom
    return requestRandom
}
//ver todos los productos
function getAll() {
    //leo archivo fs para obtener el array de productos, lo guardo en productData
    const productData = JSON.parse(fs.readFileSync('./productos.txt', 'utf-8'))
    //si el array productData está vacío
    if (productData.length == 0){
        //log "No se encontraron productos."
        console.log('No se encontraron productos.')
        //retorno string "No se encontraron productos"
        return 'No se encontraron productos.'
    } 
    //log lista completa de productos
    console.log('Lista completa de productos:\n' + JSON.stringify(productData, null, 2));
    //retorno el array de productos
    return productData
}
//modificar producto
//argumentos: valor de id del producto, datos modificados del producto recibidos desde form.html
function update(id, updatedData) {
    //leo archivo fs para obtener el array de productos, lo guardo en productData
    const productData = JSON.parse(fs.readFileSync('./productos.txt', 'utf-8'))
    //invoco función idCompare para obtener el mayor valor de id registrado
    //idCompare(productData)
    let currentMaxId = 0
    let idsToCompare = []
    data.forEach(element => {
        idsToCompare.push(element.id)
        if(idsToCompare.length == 0) {
            currentMaxId = 0
        } else {
            currentMaxId = Math.max(...idsToCompare)
        }
        return currentMaxId
    })
    //declaro variable product invocando función getById y le paso el valor de id
    const product = getById(id)
    //si se encuentra un producto con ese id
    if (product.id == id) {
        //actualizo los datos con la información recibida desde form.html
        productUpdate.name = updatedData.name
        productUpdate.price = updatedData.price
        productUpdate.thumbnail = updatedData.thumbnail
        //retorno el objeto modificado
        return productUpdate
    //si no se encuentra un producto con ese id
    } else if (product.id == null) {
        //creo un nuevo objeto newProduct y lo guardo con un nuevo id y los datos recibidos desde form.html
        //usar función save()
        const newProduct = {
            id: currentMaxId + 1,
            name: updatedData.name,
            price: updatedData.price,
            thumbnail: updatedData.thumbnail
        }
        //declaro updatedProductList como array y guardo el contenido de productData más el objeto newProduct
        const updatedProductList = [...productData, newProduct]
        //sobreescribo el archivo fs con el array updatedProductList
        fs.writeFileSync('./productos.txt', JSON.stringify(updatedProductList, null, 2), 'utf-8')
        //retorno el nuevo producto
        return newProduct
    //si productData es un array vacío
    } else {
        //retorno string "No se encontraron productos."
        return 'No se encontraron productos.'
    }
}
//eliminar producto
//paso número de id como argumento
function deleteById(id) {
    //leo archivo fs para obtener el array de productos, lo guardo en productData
    const productData = JSON.parse(fs.readFileSync('./productos.txt', 'utf-8'))
    //si el elemento del array en la posición id-1 no existe
    if (productData[id - 1] == null){
        //log string "No se encontró el producto."
        console.log('No se encontró el producto.');
        //retorno string "No se encontró el producto."
        return 'No se encontró el producto.'
    }
    //declaro array vacío uodatedProductList
    let updatedProductList = []
    //por cada elemento del array
    productData.forEach(element => {
        //si el valor de la propiedad "id" del elemento es distinto al argumento id
        if(element.id !== id) {
            //agregar el elemento al array updatedProductList
            updatedProductList.push(element)
        }
        //retorno updatedProductList
        return updatedProductList
    })
    //sobreescribo el archivo fs con el array updatedProductList
    fs.writeFileSync('./productos.txt', JSON.stringify(updatedProductList, null, 2), 'utf-8')
    //log lista actualizada de productos
    console.log('Nueva lista de productos:\n' + JSON.stringify(updatedProductList, null, 2));
    //retorno lista actualizada de productos
    return updatedProductList
}
//eliminar todos
function deleteAll() {
    //declaro array vacío emptyProductList
    let emptyProductList = []
    //sobreescribo el archivo fs de productos con emptyProductList
    fs.writeFileSync('./productos.txt', JSON.stringify(emptyProductList, null, 2), 'utf-8')
    //log "No hay productos para mostrar"
    console.log('No hay productos para mostrar.')
    //log "No hay productos para mostrar"
    return 'No hay productos para mostrar.'
}

//Exporto funciones para usar en controllers.js
module.exports = { productList, idCompare, save, getById, getRandom, getAll, update, deleteById, deleteAll }