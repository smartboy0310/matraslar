const express = require('express')
const router = express.Router()

const Admin = require('./admin/admin')
const Products = require('./products/products')
const Model = require('./pro_model/pro_model')
const Carusel = require('./carusel/carusel')
const Generel = require('./generel/generel')
const Orders = require('./orders/orders')
const Customers = require('./customers/customers')
const Address = require('./address/address')
const {TOKEN}  = require('../middleware/middleware')
const uploadImg = require('../middleware/multer')

router 
      .post('/admin', Admin.LOGIN)
      .get('/products', Products.GET_PRO)
      .post('/addProduct', uploadImg.array("images"), Products.POST_PRO)
      .put('/updateProduct',uploadImg.array("images"), Products.PUT_PRO)
      .delete('/deleteProduct', Products.DELETE_PRO)
      .put('/editStatus', Products.PUT_STATUS)

      .get('/model', Model.GET_MODEL)
      .post('/addModel', Model.POST_MODEL)
      .put('/updateModel', Model.PUT_MODEL)
      .delete('/deleteModel', Model.DELETE_MODEL)

      .get('/carusel',Carusel.GET_CARUSEL)

      .get('/generel', Generel.GET_GENEREL) 

      .get('/orders', Orders.GET_ORDERS)
      .post('/addOrder', Orders.POST_ORDER)
      .put('/updateOrder', Orders.PUT_FEEDBACK)
      .delete('/deleteOrder', Orders.DELETE_ORDER)

      .get('/customers', Customers.GET_CUSTOMERS)
      .post('/addCustomer', Customers.POST_CUSTOMERS)
      .put('/updateCustomer', Customers.PUT_FEEDBACK)
      .delete('/deleteCustomer', Customers.DELETE_CUSTOMERS)

      .get('/address', Address.GET_ADDRESS)
      .post('/addAddress', uploadImg.array("images"),  Address.POST_ADDRESS)
      .put('/updateAddress', uploadImg.array("images"), Address.PUT_ADDRESS)
      .delete('/deleteAddress', Address.DELETE_ADDRESS)

module.exports = router