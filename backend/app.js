const authUser = "harunaharuko141@gmail.com";
const authPass = "gesb yrcj hbfr jfze";
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
const path = require('path')
const fs = require('fs');

// Port
const port = process.env.PORT || 9000;

// Database connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database is connected!"))
  .catch((err) => console.log(err));

// Middleware
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
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
app.use('/images', express.static(path.join(__dirname, 'images')));

const fileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './files');
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  }
});

const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './images');
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  }
});

const uploadFile = multer({
  storage: fileStorage
}).single('file'); 

const uploadImage = multer({
  storage: imageStorage
}).single('image');

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: authUser,
    pass: authPass,
  },
});

const sendEmail = async (to, subject, path) => {
  try {
    let info = await transporter.sendMail({
      from: authUser,
      to: to,
      subject: subject,
      attachments: [
        {
          path: path
        }
      ]
    });

    console.log("Message sent: %s", info.messageId);
    // Delete the file after sending email
    fs.unlink(path, function(err) {
      if (err) {
        console.error("Error deleting file:", err);
      } else {
        console.log("File deleted successfully");
      }
    });
    return "Email sent successfully";
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Error sending email");
  }
};

app.post("/sendemail", (req, res) => {
  uploadFile(req, res, function(err) {
    if (err) {
      console.log(err);
      return res.status(400).send("File upload failed");
    }

    const { email, subject } = req.body;
    const filePath = req.file ? req.file.path : null;

    if (!email || !subject || !filePath) {
      return res.status(400).send("Missing parameters");
    }

    sendEmail(email, subject, filePath)
      .then((response) => {
        console.log("Email sent successfully:", response);
        res.status(200).send(response);
      })
      .catch((error) => {
        console.error("Error sending email:", error.message);
        res.status(500).send(error.message);
      });
  });
});

app.post('/uploadpicture', uploadImage, (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded');
    }

    const imageUrl = `/images/${req.file.filename}`;
    res.json({ imageUrl });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).send('Internal server error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
