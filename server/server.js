
import express from 'express';
import cors from 'cors';
import * as path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import * as cheerio from 'cheerio' // for scaping purposes

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// initialize app
const app = express();


const PORT = process.env.PORT || 8080;

// middlewares
// const cors = require('cors');
app.use(cors());




app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
