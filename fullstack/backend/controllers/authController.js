const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { email, password, fullname } = req.body;
    try{
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({
            email,
            password: hashedPassword,
            fullname
        });
        res.status(201).json(await newUser.save());

    }catch(err){
        res.status(500).json({ message: 'Server error' });
        console.error(err);
    }
}

const login = async (req, res) => {
    const { email, password } = req.body
    try{
        const user = await User.findOne({ email });
        if(!user) return res.status(404).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({message: 'Login successful', token });
    }catch(err){
        res.status(500).json({ message: 'Server error' });
        console.error(err);
    }
}

module.exports = { register, login };
   
   