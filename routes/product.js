var express = require('express');
var router = express.Router();

/* GET home page. */
const {productDetail} = require('../controllers/productController')


router.get('/productDetail',productDetail) 


module.exports = router;