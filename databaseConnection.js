const mysql = require('mysql2');

const is_qoddi = process.env.IS_QODDI || false;

const dbConfiQoddi = {
	host: "us-cdbr-east-03.cleardb.com",
	user: "b1ab7fb2ee03bc",
	password: "2a484a2d",
	database: "qoddi_3d208ad4bd6f421",
	multipleStatements: false,
	namedPlaceholders: true
};

const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "Password",
	database: "lab_example",
	multipleStatements: false,
	namedPlaceholders: true
};

if (is_qoddi) {
	var database = mysql.createPool(dbConfiQoddi);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		