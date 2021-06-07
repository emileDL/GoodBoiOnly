"use strict";

const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getAllBusinesses = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  try {
    const db = client.db("FINAL-PROJECT");
    console.log("really connected");

    const businesses = await db.collection("businesses").find().toArray();
    // console.log("businesses", businesses);

    client.close();
    console.log("very disconnected");
    res.status(200).json({ status: 200, data: businesses });
  } catch (err) {
    res.status(404).json({ status: 404, message: err.message });
  }
};

module.exports = { getAllBusinesses };

// const businesses = require("./data.json");

// const addAllBusinesses = async () => {
// try {
// const client = await MongoClient(MONGO_URI, options);

// await client.connect();

// const db = client.db("FINAL-PROJECT");
// console.log("CONNECTED");

// await db.collection("businesses").insertMany(businesses);

// client.close();
// console.log("DISCONNECTED");
// };

// addAllBusinesses();
