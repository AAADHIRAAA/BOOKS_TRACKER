const passport = require("passport");
const dotenv = require('dotenv');
dotenv.config({ path: '../.env.example' });
const express = require("express");
const router = express.Router();
const { Strategy  } = require("passport-google-oauth20");
const User = require( "../models/userModel");
const middleware = require("../middleware/auth");

passport.serializeUser((user, done) => {
  done(null, user.id); // Store user ID in session
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user); // Retrieve user from MongoDB using the stored ID
  });
});

passport.use(
  new Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/dashboard",
      passReqToCallback: true,
    },
    async (_req, _accessToken, _refreshToken, profile, done) => {
      const defaultUser = {
        fullName: `${profile.name.givenName} ${profile.name.familyName}`,
        email: profile.emails[0].value,
        picture: profile.photos[0].value,
        googleId: profile.id,
      };

      try {
        const [user] = await User.findOrCreate({
          where: { googleId: profile.id },
          defaults: defaultUser,
        });
        done(null, user);
      } catch (err) {
        console.log("Error signing up", err);
        done(err, null);
      }
    }
  )
);

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (_req, res) => {
    res.redirect("/");
  }
);

module.exports= router;
