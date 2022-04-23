const express = require('express')
const router = express.Router()

const Admin = require('./admin/admin')
const Products = require('./products/products')
const Model = require('./pro_model/pro_model')
const {TOKEN}  = require('../middleware/middleware')
const uploadImg = require('../middleware/multer')

router 
      .post('/admin', Admin.LOGIN)
      .get('/products', Products.GET_PRO)
      .post('/addProduct', uploadImg.array("images"), Products.POST_PRO)
      .put('/updateProduct', Products.PUT_PRO)
      .delete('/DeleteProducts', Products.DELETE_PRO)
      .put('/editStatus', Products.PUT_STATUS)

      .get('/model', Model.GET_MODEL)
      .post('/addModel', Model.POST_MODEL)
      .put('/updateModel', Model.PUT_MODEL)
      .delete('/deleteModel', Model.DELETE_MODEL)
      

module.exports = router