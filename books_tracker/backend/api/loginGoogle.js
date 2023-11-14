const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const router = express.Router();



// router.get("/login/success",(req,res) =>{
//   if(req.user){
  
//     const jwtToken = jwt.sign(
//       { id: userWithEmail.id, email: userWithEmail.email },
//       process.env.JWT_SECRET
//     );
//     res.status(200).json({
//       error:false,
//       message:"Successfully Loged In",
//       user:req.user,
//       token:jwtToken
//     })
//   }
//   else{
//     res.status(403).json({error:true, message:"Not Authorised"});
//   }
// })

// router.get("/login/failure",(req,res) =>{
//   res.status(401).json({
//     error:true,
//     message:"Log in failure",
//   });
// })


router.get("/auth/google", passport.authenticate("google", ["profile","email"]));

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureMessage: "Cannot login to Google, please try again later!",
    failureRedirect: "http://localhost:3000/login",
    successRedirect: "http://localhost:3000/dashboard",
  }),

);

router.get("/logout",(req,res)=>{
  req.logout();
  res.redirect('/');
});

module.exports = router;