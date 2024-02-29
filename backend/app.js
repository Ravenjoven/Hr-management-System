const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require("cors");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error");
//import routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const jobTypeRoutes = require("./routes/jobTypeRoutes");
const jobRoute = require("./routes/jobsRoutes");
const jobTypeModels = require("./models/jobTypeModels");

const dotenv = require('dotenv');
dotenv.config();
const {OAuth2Client} = require('google-auth-library');


//test
const auth =require("./routes/auth");
const request =require("./routes/request");

//database connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(()=>console.log("Database is connected!"))
.catch((err)=>console.log(err));

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json({limit: "5mb"}));
app.use(bodyParser.urlencoded({
    limit: "5mb",
    extended: true
}));
app.use(cookieParser());
app.use(cors());

//Routes middleware
//app.get('/', (req, res)=>{
  //  res.send("Test React JS");
//})
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', jobTypeRoutes);
app.use('/api', jobRoute);

//arnelapitest
app.options('*', function(req,res,next){
    res.header("Access-Control-Allow-Origin", 'https://localhost:5173');
    res.header("Access-Control-Allow-Credentials","true");
    res.header("Access-Control-Allow-Headers",['X-Requested-Width','content-type', 'credentials']);
    res.header('Access-Control-Allow-Methods','GET,POST');
    res.status(200);
    next()
});

<<<<<<< HEAD
app.use('/auth', auth);
=======
// app.use('/auth', oauth);
>>>>>>> 1e9c820a30c9ab0e877ec231db1d6363d5f04b23
app.use('/request', request);

app.use('/get', (req,res)=>
    res.json({"users": ["userone","usertwo","userthree"]})
)

//error middleware
app.use(errorHandler);

//port
const port = process.env.PORT || 9000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});
