const Promise = require('bluebird');
const express = require('express');
const models = require('../models');
const router = express();
const path = require('path');

router.use(express.static(path.join(__dirname, '/public')));
router.use('/bootstrap', express.static(path.join(__dirname, '../node_modules/bootstrap/dist')));
router.use('/jQuery', express.static(path.join(__dirname, "../node_modules/jquery/dist")));

router.get('/', function(req, res){

	var p1 = models.Place.findAll();
	var p2 = models.Restaurant.findAll();
	var p3 = models.Activity.findAll();
	Promise.all([p1, p2, p3])
	.then(function(resArr){
		res.render('index');
	});


});



module.exports = router;