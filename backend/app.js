const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require("cors");

//database connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(()=>console.log("Database is connected!"))
.catch((err)=>console.log(err));
//port
const port = process.env.PORT || 9000

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});
