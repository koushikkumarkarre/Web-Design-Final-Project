// Import required dependencies
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import { createRequire } from "module";
const require = createRequire(import.meta.url);

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import mongoose from 'mongoose';
import routes from './routes/index.js';
import model from './models/index.js';   

const app = express();
const fileupload = require("express-fileupload");

// Connect to the database in the local machine using mongoose
mongoose.connect('mongodb://localhost:27017/coursedb', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileupload());
app.use(express.static("files"));

app.post("/upload", (req, res) => {
  // const newpath = __dirname + "\\files\\";
  const file = req.files.file;
  const filename = file.name;
  console.log(file.name);
  file.mv(``, (err) => {
    if (err) {
      return res.status(500).send({ message: "File upload failed", code: 500 });
    }
    return res.status(200).send({ message: "File Uploaded", code: 200 });
  });
});

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	// res.setHeader('Access-Control-Allow-Origin', 'http://10.110.47.6:3000');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT,PATCH, DELETE');
	res.setHeader("Access-Control-Allow-Headers", "Content-Type,Accept, Access-Control-Allow-Headers, Authorization, X-Requested-With");
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	res.setHeader("Content-Type", "application/json");
	next();
});

app.listen(3003, () => {
  console.log("File server running successfully on 3003");
});

routes(app);
  
export default app;