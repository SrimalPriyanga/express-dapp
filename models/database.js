/**
 * Created by priyanga on 10/23/15.
 */
var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://admin:1234@localhost.com:5432/mydb');

var User = sequelize.define('user', {
	firstName: {
		type: Sequelize.STRING,
		field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
	},
	lastName: {
		type: Sequelize.STRING
	}
}, {
	freezeTableName: true // Model tableName will be the same as the model name
});

User.sync({force: true}).then(function () {
	// Table created
	return User.create({
		firstName: 'John',
		lastName: 'Hancock'
	});
});

User.findOne().then(function (user) {
	console.log(user.name);
});