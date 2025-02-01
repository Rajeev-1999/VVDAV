const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User');
const { where } = require('sequelize');

//Parent/Admin login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user || user.password !== password) {
        return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, role: user.role}, 'SECRET_KEY');
    res.json({ token });
});

//Parent/Admin registration // i add this line additionally
router.post('/register', async (req, res) => {
    const { email, password, role } = req.body;
    const user = await User.create({ email, password, role });

    const token = jwt.sign({ id: user.id, role: user.role}, 'SECRET_KEY');
    res.json({ token });
});

module.exports = router;