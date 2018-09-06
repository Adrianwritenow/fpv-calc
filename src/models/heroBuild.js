const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/fhdb');

const buildSchema = new Schema({
  build_id: { type: Number, required: true },
  name: { type: String, required: true },
  user_id: { type: Number, required: true },
  feats: { type: Array, 'default': [] },
  perks: { type: Array, 'default': [] },
  summary: { type: String, required: true }
});

const Build = mongoose.model('buildsCollection', buildSchema);


module.exports = Build;
