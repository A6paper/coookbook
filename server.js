const { response } = require("express");
const express = require("express");
const app = express();
const {connect}  = require("mongodb");
const PORT = process.env.PORT || 5000;
const db = require("./database/connect");
const getIngredient = require("./routes/getIngredient");
const saveIngredient = require("./routes/saveIngredient");
const cors = require("cors");


db.connect();


 //Enable json from front
 app.use(express.json({extended:false}));
 app.use(express.text({extended:false}));


// routy GET
app.use("/",cors(),getIngredient);

// routy POST
app.use("/", saveIngredient);




app.get("/", (request,response) => {
    response.send("Jsi na hlavni strance");
});

app.listen(PORT, (err) => {
    console.log(`Server bezi na ${PORT}!`)
});