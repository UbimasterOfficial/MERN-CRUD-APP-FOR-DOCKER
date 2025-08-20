const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://dmmadushalw1999:2subr0nbKyxHCZdU@firstcluster.uytooc1.mongodb.net/?retryWrites=true&w=majority&appName=FirstCluster";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
