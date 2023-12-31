
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './.env.example' });

const connectDB = async () => {
  try {
    const atlasConnectionString = process.env.ATLAS_STRING;
    await mongoose.connect(atlasConnectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
    process.exit(1); // Exit the process if unable to connect to the database
  }
};

module.exports = connectDB;
