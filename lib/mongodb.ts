// create a mongodb connection
import mongoose from "mongoose";
const MONGODB_URI = "mongodb://localhost:27017/blogApp";
export default dbConnect;
async function dbConnect() {
  if (!MONGODB_URI) {
    throw new Error("Please define  the MONGODB_URI env variable.");
  }
  await mongoose.connect(MONGODB_URI);
  return mongoose;
}
