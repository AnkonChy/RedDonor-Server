import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use("/reddonor/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ri84s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ri84s.mongodb.net/Red-donor?retryWrites=true&w=majority&appName=Cluster0`;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("db is connected");
  } catch (error) {
    console.log("Db is not connected");
    console.log(error.message);
  }
};

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
  await connectDB();
});
