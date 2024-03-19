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
// const authRoutes = require("./routes/authRoutes");
// const userRoutes = require("./routes/userRoutes");
// const jobTypeRoutes = require("./routes/jobTypeRoutes");
const sendContractRoutes = require("./routes/sendContractRoutes");
const JobsRoutes = require("./routes/JobsRoutes");
const CategoryRoutes = require("./routes/CategoryRoutes");
const ApplicationRoutes = require("./routes/ApplicationRoutes");
const UsersRoutes = require("./routes/UsersRoutes");
// const jobTypeModels = require("./models/jobTypeModels");
// const addUser = require("./routes/addUser");

const event = require("./routes/eventRoutes");
const profile = require("./routes/profileRoutes");
const dotenv = require("dotenv");
dotenv.config();
const { OAuth2Client } = require("google-auth-library");

//test
const auth = require("./routes/auth");
const request = require("./routes/request");

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
app.use("/uploads", express.static("uploads"));

//Routes middleware
//app.get('/', (req, res)=>{
//  res.send("Test React JS");
//})
// app.use("/api", authRoutes);
// app.use("/api", userRoutes);
// app.use("/api", jobTypeRoutes);
// app.use("/api", jobRoute);
// app.use("/api", addUser);
app.use("/api", sendContractRoutes);
app.use("/api", JobsRoutes);
app.use("/api", CategoryRoutes);
app.use("/api", ApplicationRoutes);
app.use("/api", UsersRoutes);
app.use("/api", event);
app.use("/api", profile);

//error middleware
app.use(errorHandler);

//port
const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
