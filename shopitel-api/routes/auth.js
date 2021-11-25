const router = require("express").Router();
const User = require("../models/User")
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require("passport");
//Register
router.post("/register", async (req,res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password,process.env.PASS_SEC).toString(),
    });
    try
    {
    const savedUser = await newUser.save()
    res.status(201).json(savedUser);
}catch(err){
    res.status(500).json(err);
}
});

//Login
router.post("/login", async(req, res)=>{
    try{
        const user = await User.findOne({username : req.body.username});

        !user && res.status(401).json("Wrong User Name");
        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);

        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        const inputPassword = req.body.password;
        
        originalPassword != inputPassword && 
                res.status(401).json("Wrong Password");

                //Creating json web token
                const accessToken = jwt.sign(
                    {
                        id: user._id,
                        isAdmin: user.isAdmin,
                    },
                    process.env.JWT_SEC,
                        {expiresIn:"3d"}
                );
    
        const { password, ...others } = user._doc;  
        res.status(200).json({...others, accessToken});
            }catch(err){
        res.status(500).json(err)
    }
});

router.delete('/logout', (req, res) => {
    if (req.session) {
      req.session.destroy(err => {
        if (err) {
          res.status(400).send('Unable to log out')
        } else {
          res.send('Logout successful')
        }
      });
    } else {
      res.end()
    }
  });


module.exports = router