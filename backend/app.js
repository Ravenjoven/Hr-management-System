const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error");
const multer = require("multer");
const upload = multer();
//port
const port = process.env.PORT || 9000;
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
app.use(bodyParser.json({ limit: "5mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "5mb",
    extended: true,
  })
);
app.use(cookieParser());
app.use(cors());
app.use(upload.none());
//error middleware
app.use(errorHandler);
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "harunaharuko141@gmail.com",
    pass: "fwvu rwjs txks wqhy",
  },
});

const sendEmail = async (to, subject, attachments) => {
  console.log(req.body);
  try {
    let info = await transporter.sendMail({
      from: "harunaharuko141@gmail.com", // sender address
      to: to,
      subject: subject,
      attachments: attachments,
    });

    console.log("Message sent: %s", info.messageId);
    return 1;
  } catch (error) {
    console.error("Error sending email:", error);
    return 2;
  }
};

app.post("/sendemail", (req, res) => {
  console.log(req.body);
  const { email, subject, attachments } = req.body;
  if (!email || !subject || !attachments) {
    return res.status(400).send("Missing parameters");
  }

  sendEmail(email, subject, attachments)
    .then((response) => {
      console.log("Email sent successfully:", response);
      res.status(200).send("Email sent successfully");
    })
    .catch((error) => {
      console.error("Error sending email:", error.message);
      res.status(500).send("Error sending email");
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
