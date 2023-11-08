const express = require("express");
const passport = require("passport");
const { isUserAuthenticated } = require("../middleware/auth");

const router = express.Router();

const successLoginUrl = "http://localhost:3000/login";
const errorLoginUrl = "http://localhost:3000/login";

router.get(
  "/login/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureMessage: "Cannot login to Google, please try again later!",
    failureRedirect: errorLoginUrl,
    successRedirect: successLoginUrl,
  }),
  (req, res) => {
    console.log("User: ", req.user);
    res.send("Thank you for signing in!");
  }
);

module.exports = router;