const mongoose = require('mongoose');
const mongoHost = process.env.MONGO_HOST || 'localhost';
const mongoPort = process.env.MONGO_PORT || '27017';
const mongoDB = process.env.MONGO_DB || 'lego-gallery';
const mongoURI = `mongodb://${mongoHost}:${mongoPort}/${mongoDB}`;
const mongoUser = process.env.MONGO_USER || 'legoUser';
const mongoPass = process.env.MONGO_PASS || ' ';
const mongoOption = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: mongoUser,
  pass: mongoPass
};
mongoose.connect(mongoURI, mongoOption);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('connected to Mongo');
});

module.exports = mongoose;