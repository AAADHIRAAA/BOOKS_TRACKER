const router = require('express').Router();


router.get('/', (req,res)=>{
  res.send("You are logged in , this is your profile" + req.user.fullName);
})

module.exports = router;