const mongoose = require("mongoose");
const ingredient = new mongoose.Schema({
name:{
    type:String,
}
});
module.exports = mongoose.model("Ingredient", ingredient);
