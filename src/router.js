const express = require('express');
const {Router} = express
const router = Router()
const controllers = require('./controllers');

/*Rutas*/

//cargar producto
router.post('/form', (req, res) => {
    const newData = req.body
    res.send(controllers.addNewProduct(newData))
    console.log('POST request succesful');
})
//buscar producto por id
router.get('/product/:id', (req, res) => {
    const {id} = req.params
    res.send(controllers.getProductById(id))
    console.log('GET request succesful')
})
//ver producto al azar
router.get('/random', (req, res) => {
    res.send(controllers.getRandomProduct())
    console.log('GET request succesful')
})
//ver todos los productos
router.get('/all', (req, res) => {
    res.send(controllers.getAllProducts())
    console.log('GET request succesful')
})
//modificar producto
router.put('/update/:id', (req, res) => {
    const {id} = req.params
    const newData = req.body
    res.send(controllers.updateProduct(id, newData))
    console.log('PUT request succesful')
})
//eliminar producto
router.delete('/delete/:id', (req, res) => {
    const {id} = req.params
    res.send(controllers.deleteProductById(id))
    console.log('DELETE request succesful')
})
//eliminar todos
router.delete('/noProducts', (req, res) => {
    res.send(controllers.deleteAllProducts())
    console.log('DELETE request succesful')
})

module.exports = router