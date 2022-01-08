
const router = require("express").Router();
const User = require('../Models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;


// Register

router.post("/register", async (req, res) => {
    try {
        const newUser = new User({
            username : req.body.username,
            email : req.body.email,
            password : hashedPassword,
        });
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    }catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Login

module.exports = router;
