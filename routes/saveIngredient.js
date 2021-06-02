const saveIngredient = require("express").Router();
const modelIngredient = require('../database/models/ingredient');

saveIngredient.post("/save-ingredient",(req,res)=>{
    const {name} = req.body;
    const surovina = new modelIngredient({
        name:name
    })
    surovina.save((err,document) =>{
        if(err){
            return res.json({
                msg:'bohuzel se nepodarilo neulozit'
            })
        }else{
            return res.json( {
                msg:'Uspesne ulozeni receptu ${JSON.stringify(document)}'
            })
        }
    })
})
    
saveIngredient.get("/save-ingredient", (req,res) => {
    res.send("Ano, navstivil jsi save-ingredients GETEM ")
})
module.exports = saveIngredient;