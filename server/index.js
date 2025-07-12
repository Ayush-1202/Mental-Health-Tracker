const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = process.env.PORT || 5173;

const entryRoutes = require("./routes/entryRoutes");

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://Ayush1202:Ayush93059*@cluster0.guqdesq.mongodb.net/Mental-health-Tracker');

app.use("/api/entries", entryRoutes); 

app.listen(PORT);