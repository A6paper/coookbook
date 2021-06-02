const { response } = require("express");
const express = require("express");
//const {connect}  = require("mongodb");
const app = express();
const PORT = process.env.PORT || 5000;
const db = require("./database/connect");
const getIngredient = require("./routes/getIngredient");
const saveIngredient = require("./routes/saveIngredient");
const cors = require("cors");
db.connect();


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

