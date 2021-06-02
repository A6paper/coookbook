const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: String,
  image: String,
  portions: String,
  hours: String,
  minutes: String,
  ingredients: Array,
  instructions: Array,
  category: String,
  priceTotal: String,
  caloriesTotal: String,
  author: String,
  authorName: { type: String, default: 'Anon' },
  likes: Number,
  portionsSuffix: String,
});


module.exports = mongoose.model('Recipe', recipeSchema);