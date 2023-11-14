const express = require("express");

// const loginApi = require("./login");
const loginWithGoogleApi = require("./loginGoogle");


const router = express.Router();


// // router.use(loginApi);
router.use(loginWithGoogleApi);


module.exports = router;