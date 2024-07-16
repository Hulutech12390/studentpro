/*
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect('mongodb://localhost:27017/LoginNmee', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB', error);
});
*/


const mongoose = require('mongoose');

const connectDB = async () => {
  try {
      await mongoose.connect(`mongodb+srv://alazarmesfin:wHch5adIP3vxMH8V@cluster0.lfinulw.mongodb.net/LoginNmeev`, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });
      console.log(`MongoDB Connected: ${mongoose.connection.host}`);
  } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
  }
};

module.exports = connectDB;