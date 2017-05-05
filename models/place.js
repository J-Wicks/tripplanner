const Sequelize = require('sequelize');
const db = require('./db');

db.sync();

const Place = db.define('places', {
	address: {type: Sequelize.STRING},
	city: {type: Sequelize.STRING},
	state: {type: Sequelize.STRING},
	phone: {type: Sequelize.STRING},
	location: {type: Sequelize.ARRAY(Sequelize.FLOAT)}
});

module.exports = Place