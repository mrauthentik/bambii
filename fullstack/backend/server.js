const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const authMiddleware = require('./middleware/logger');
require('dotenv').config();

const app = express();
app.use(cors()); // allow frontend to connect
app.use(express.json()); // <-- important: this parses JSON bodies
app.use(express.urlencoded({ extended: true })); // optional: for form data

app.use('/api/auth',authRoutes )

//Protect routes with auth middleware
  app.get('/dashboard', authMiddleware, (req, res) => {
   
    res.json({ message: 'Welcome to your dashboard', user: req.user  }); 
    });

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => {console.log('MongoDB connected ✅')
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port http://localhost:${process.env.PORT} 🚀`);
    });
})
.catch(err => console.error('MongoDB connection error:', err));