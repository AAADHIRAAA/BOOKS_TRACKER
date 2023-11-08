const express = require('express');
const router = express.Router();
const {WorkOS} = require('@workos-inc/node');
const dotenv = require('dotenv');


dotenv.config({ path: '../.env.example' });

const workos = new WorkOS(process.env.WORKOS_API_KEY);
const clientID = process.env.WORKOS_CLIENT_ID;
const organization = process.env.WORKOS_ORG_ID;



router.get("/auth/sso", (_req, res) => {
    const authorizationUrl = workos.sso.getAuthorizationURL({
      organization,
      clientID,
      redirectURI: "http://localhost:3000/auth/sso/redirect",
    });
  
    res.redirect(authorizationUrl);
  });
  
//   router.get("/auth/sso/redirect", async (req, res) => {
//     const { code } = req.query;
  
//     const { profile } = await workos.sso.getProfileAndToken({
//       code,
//       clientID,
//     });
  
//     req.session.user = {
//       id: profile.id,
//       first_name: profile.first_name,
//       last_name: profile.last_name,
//       email: profile.email,
//     };
  
//     res.redirect("/dashboard");
//   });
  
//   router.get("/auth/logout", (req, res) => {
//     req.session.destroy(() => {
//       res.redirect("/");
//     });
//   });
  
//   router.get("/", (req, res) => {
//     const user = req.session.user;
//     res.render("index.js", {
//       user,
//     });
//   });
  
//   router.get("/dashboard", (req, res) => {
//     if (!req.session.user?.id) {
//       return res.redirect("/auth/sso");
//     }
  
//     const user = req.session.user;
  
//     res.render("dashboard.js", {
//       user,
//     });
//   });
  
  

  
 

  module.exports=router;