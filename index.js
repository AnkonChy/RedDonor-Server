const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());

app.post("/products", async (req, res) => {
  try {
    // const title = req.body.title;
    // const price = req.body.price;
    // const description = req.body.description;

    const newProduct = new Product({
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
    });

    const productData = await newProduct.save();
    res.status(201).send(productData);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ri84s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ri84s.mongodb.net/Red-donor?retryWrites=true&w=majority&appName=Cluster0`;

//create product schema
const productsSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//create product model
const Product = mongoose.model("Products", productsSchema);
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
