const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const voucherRouter = require('./routes/voucherRoutes')
const cors = require('cors');
const errorHandler = require('./utils/errorHandler');
const institutionRoutes = require('./routes/institutionRoutes');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/institutions', institutionRoutes )
app.use('/api/vouchers',voucherRouter)

app.use(errorHandler)
module.exports = app;

