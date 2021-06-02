
const Mongoose = require("mongoose");
const dotenv = require("dotenv");

class dbConnect {
    connect(){
        dotenv.config();
        Mongoose.connect(process.env.DB_CONNECT,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        }, (err) => {
            if(err) throw new Error("cannot connect to database");
            console.log("Successfully connected");
        })
    }
}
module.exports = new dbConnect;