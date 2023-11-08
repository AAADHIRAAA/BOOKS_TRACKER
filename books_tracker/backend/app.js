const express = require('express');
const cors = require('cors');
const passport = require("passport");
const connectDB = require('./connection');

const dotenv = require('dotenv');
dotenv.config({ path: './.env.example' });
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const ejs = require('ejs');
const path=require('path');
const {WorkOS} = require('@workos-inc/node');
const workos = new WorkOS(process.env.WORKOS_API_KEY);
const { v4: uuidv4 } = require('uuid');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = 5000; // Set your desired port number
connectDB()
  .then(() => {
    // Set up your middleware, routes, and other server configurations here
    const bookController = require('./controllers/bookController');
const router = express.Router();
require("./auth/passport");
require("./auth/passportGoogle");

require("./models/userModel");

const middleware = require("./middleware/auth");


/*--------------------app usage and set------------------ */
app.use(router);
app.use(cors()); 

app.set("views", path.join(__dirname, "../react-table/app/pages"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 86400000, // 24 hours in milliseconds
      secure: process.env.NODE_ENV === "production",
      sameSite: true,
    },
  })
);


app.use(passport.initialize());
app.use(passport.session());

const limit = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 60,
  message: 'Too many request with this IP Address..Try again in 1 hour'
});
const api = require('./api');
app.use('/api/v1',api);
// app.use('/dwt/api', limit);
// app.use('/dwt/api/books', bookController.addBook);

/*---------------------------routing-------------------------- */

app.post('/api/save-book-data', bookController.addBook);

// app.post('/api/save-book-data', (req, res) => {
//   const receivedData = req.body;
//   console.log(receivedData);
//   const uniqueId = uuidv4();
//   // For demonstration purposes, just send back a success response
//   res.status(200).json({ message: 'Data received successfully!' });
// });
app.put('/api/update-book-data/:id',bookController.updateBook);
// app.put('/api/update-book-data/:id', (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedData = req.body;
 
//     res.json({ message: 'Data updated successfully!', data: updatedData });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });
// app.get('/auth', (_req, res) => {
//   // The user's organization ID
//   const organization = process.env.WORKOS_ORG_ID;
//   const clientID = process.env.WORKOS_CLIENT_ID;
//   // The callback URI WorkOS should redirect to after the authentication
//   const redirectURI = process.env.REDIRECT_URI;

//   const authorizationUrl = workos.sso.getAuthorizationURL({
//     organization,
//     redirectURI,
//     clientID,
//   });

//   res.redirect(authorizationUrl);
// });

// app.get('/callback', async (req, res) => {
//   const { code } = req.query;
//   const clientID=process.env.WORKOS_CLIENT_ID;
//   const { profile } = await workos.sso.getProfileAndToken({
//     code,
//     clientID,
//   });

//   // Use the information in `profile` for further business logic.

//   res.redirect('/');
// });


  // Start the server
  app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });


