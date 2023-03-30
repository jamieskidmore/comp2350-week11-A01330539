const is_qoddi = process.env.IS_QODDI || false;

const dbConfigQoddi = "mysql://b1ab7fb2ee03bc:2a484a2d@us-cdbr-east-03.cleardb.com/qoddi_3d208ad4bd6f421";

const dbConfigLocal = "mysql://root:Password@localhost/lab_example";

if (is_qoddi) {
	var databaseConnectionString = dbConfigQoddi;
}
else {
	var databaseConnectionString = dbConfigLocal;
}

module.exports = databaseConnectionString;
		