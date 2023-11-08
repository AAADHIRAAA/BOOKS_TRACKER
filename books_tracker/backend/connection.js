
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const atlasConnectionString = 'mongodb+srv://padmapriyas:Padma2023atlas@library-cluster.rhvnbwa.mongodb.net/dwt';
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
