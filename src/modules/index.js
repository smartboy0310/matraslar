const express = require('express')
const router = express.Router()

const Admin = require('./admin/admin')
const Products = require('./products/products')
const Model = require('./pro_model/pro_model')
const Carusel = require('./carusel/carusel')
const Generel = require('./generel/generel')
const Orders = require('./orders/orders')
const Customers = require('./customers/customers')
const Technology = require('./technology/technology')
const Address = require('./address/address')
const {TOKEN}  = require('../middleware/middleware')
const uploadImg = require('../middleware/multer')

router 
      .post('/admin', Admin.LOGIN)
      
      .put('/editStatus', Products.PUT_STATUS)
      .get('/product', Products.GET_PRO)
      .get('/product/:search_data', Products.GET_PRO)
      .post('/product', uploadImg.array("images"), Products.POST_PRO)
      .post('/products',uploadImg.array("images"), Products.PUT_PRO)
      .delete('/product', Products.DELETE_PRO)


      .get('/model', Model.GET_MODEL)
      .post('/model', Model.POST_MODEL)
      .put('/model', Model.PUT_MODEL)
      .delete('/model', Model.DELETE_MODEL)

      .get('/carusel',Carusel.GET_CARUSEL)
      .post('/carusel', uploadImg.single("image"), Carusel.POST_CARUSEL)

      .get('/generel', Generel.GET_GENEREL) 
      .post('/generel', Generel.POST_GENEREL)

      .get('/order', Orders.GET_ORDER)
      .get('/order/:search_data', Orders.GET_ORDER)
      .post('/order', uploadImg.single("img"),Orders.POST_ORDER)
      .put('/order', Orders.PUT_FEEDBACK)
      .delete('/order', Orders.DELETE_ORDER)

      .get('/customer', Customers.GET_CUSTOMERS)
      .get('/customer/:search_data', Customers.GET_CUSTOMERS)
      .post('/customer', Customers.POST_CUSTOMERS)
      .put('/customer', Customers.PUT_FEEDBACK)
      .delete('/customer', Customers.DELETE_CUSTOMERS)

      .get('/technology', Technology.GET_TECHNOLOGY)
      .post('/technology', uploadImg.single("tech_image"), Technology.POST_TECHNOLOGY)
      .post('/technologies', uploadImg.single("tech_image"), Technology.PUT_TECHNOLOGY)
      .delete('/technology', Technology.DELETE_TECHNOLOGY)

      .get('/address', Address.GET_ADDRESS)
      .post('/address', uploadImg.array("images"),  Address.POST_ADDRESS)
      .post('/address-update', uploadImg.array("images"), Address.PUT_ADDRESS)
      .delete('/address', Address.DELETE_ADDRESS)

module.exports = router