const Sequelize = require('sequelize');
const db = require('./db');

db.sync();

const Restaurant = db.define('retaurant', {
	name: {type: Sequelize.STRING},
	cuisine: {type: Sequelize.STRING},
	price: {type: Sequelize.INTEGER}
});

module.exports = Restaurant