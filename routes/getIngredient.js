const getIngredient = require("express").Router();
const Ingredient = require("../models/ingredient");
getIngredient.get("/get-ingredient", (req, res)=>{
    Ingredient.find({},(err,docs)=>{
        if (err){
            return res.json({
                msg:"Bohuzel se nepodarilo ziskat doc-ty",
                documents:[]
            })
        }else{
            return res.json({
                msg: "Uspesne se nam podarilo ziskat suroviny",
                documents:docs

            })
        }
    })
})
module.exports = getIngredient;