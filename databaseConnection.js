const MongoClient = require("mongodb").MongoClient;
const is_qoddi = process.env.IS_QODDI || false;
const qoddiURI =
  "mongodb+srv://theMongoAdmin:accidentalLoginSteps@cluster0.hqfzvmq.mongodb.net/?retryWrites=true&w=majority";
const localURI =
  "mongodb+srv://theMongoAdmin:accidentalLoginSteps@cluster0.hqfzvmq.mongodb.net/?retryWrites=true&w=majority";
if (is_qoddi) {
  var database = new MongoClient(qoddiURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} else {
  var database = new MongoClient(localURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
module.exports = database;
