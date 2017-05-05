const Sequelize = require('sequelize');
const db = require('./db');

db.sync();

const Activity = db.define('activity', {
	name: {type: Sequelize.STRING},
	age_range: {type: Sequelize.STRING}
});

module.exports = Activity;