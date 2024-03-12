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
const sendContractRoutes = require("./routes/sendContractRoutes");
const addJobsRoutes = require("./routes/addJobsRoutes");
const addCategoryRoutes = require("./routes/addCategoryRoutes");
<<<<<<< HEAD
const jobApplicationRoutes = require("./routes/jobApplicationRoutes");

=======
const addEmployeeRoutes = require("./routes/addEmployeeRoutes");
>>>>>>> 1923f11622e4214f6de4c91b374b2e4565108b88
// const jobTypeModels = require("./models/jobTypeModels");
//database connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database is connected!"))
  .catch((err) => console.log(err));

//Middleware
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "5mb", extended: true })); // Specify extended option
app.use(
  bodyParser.urlencoded({
    limit: "5mb",
    extended: true, // Specify extended option
  })
);
app.use(cookieParser());
app.use(cors());

//Routes middleware
//app.get('/', (req, res)=>{
//  res.send("Test React JS");
//})
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", jobTypeRoutes);
app.use("/api", jobRoute);
app.use("/api", sendContractRoutes);
app.use("/api", addJobsRoutes);
app.use("/api", addCategoryRoutes);
<<<<<<< HEAD
app.use("/api", jobApplicationRoutes);
=======
app.use("/api", addEmployeeRoutes);
>>>>>>> 1923f11622e4214f6de4c91b374b2e4565108b88

//error middleware
app.use(errorHandler);

//port
const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
