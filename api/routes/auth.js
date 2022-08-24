const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
//create is post, update is push 
//get method to 
//return a response 
router.post("/register", async (req, res)=>{
   try{

      //hash password 
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(req.body.password,salt);

      //create new user
      const newUser = new User({
         username: req.body.username,
         email: req.body.email,
         password: hashedPass,

      });

      //using user schema and then sens response
      const user = await newUser.save();
      res.status(200).json(user);

   }catch(err){
      //wrong with express server
      res.status(500).json(err);
   }
});


//LOGIN

router.post("/login", async (req, res)=>{
   try{

      //unique user so findOne
      const user = await User.findOne( {username: req.body.username});
      !user && res.status(400).json("Wrong credentials!");

      //if user then compare password with hash password 
      const validated = await bcrypt.compare(req.body.password, user.password);

      //if passwords do not match send error message 
      !validated && res.status(400).json("Wrong credentials!");

      //everything but the password
      const {password, ...others} = user._doc;

      res.status(200).json(others);

   }catch(err){
      res.status(500).json(err);
   }
});

module.exports = router;