const config = require("../config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = config.mongoUrl;
db.absd = require("../models/modelTest.js")(mongoose);
db.mongoose.connect(db.url, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
  console.log("Connected to the database!");
}).catch(err => {
  console.log("Cannot connect to the database!", err);
  process.exit();
});

module.exports = db;