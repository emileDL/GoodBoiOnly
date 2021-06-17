"use strict";

const { MongoClient, ObjectID } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const assert = require("assert");

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

    client.close();
    console.log("very disconnected");
    res.status(200).json({ status: 200, data: businesses });
  } catch (err) {
    res.status(404).json({ status: 404, message: err.message });
  }
};

const postReview = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  try {
    const db = client.db("FINAL-PROJECT");
    console.log("ah yes, connected");

    const reviews = await db.collection("reviews").insertOne(req.body);

    client.close();
    console.log("is disconnected innit");
    res.status(201).json({ status: 201, data: reviews });
  } catch (err) {
    res.status(400).json({ status: 400, message: err.message });
  }
};

const getReviews = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  try {
    const db = client.db("FINAL-PROJECT");
    console.log("pretty much connected");

    const getReviews = await db.collection("reviews").find().toArray();
    // console.log("businesses", businesses);

    client.close();
    console.log("very disconnected");
    res.status(200).json({ status: 200, data: getReviews });
  } catch (err) {
    res.status(404).json({ status: 404, message: err.message });
  }
};

const editReview = async (req, res) => {
  const { newStatus } = req.body;
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  try {
    const db = client.db("FINAL-PROJECT");
    console.log("did the thing");

    const editReviews = await db
      .collection("reviews")
      .findOneAndUpdate({ status }, { $set: { status: newStatus } });

    client.close();
    console.log("done deal");
    res.status(200).json({ status: 200, data: editReviews });
  } catch (err) {
    res.status(404).json({ status: 404, message: err.message });
  }
};

const deleteReview = async (req, res) => {
  const { id } = req.params;
  console.log("REQ.PARAMS", req.params);
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("FINAL-PROJECT");
  try {
    await client.connect();
    const db = client.db("FINAL-PROJECT");
    console.log("iz there");

    const deleteReviews = await db
      .collection("reviews")
      .deleteOne({ _id: ObjectID(id) });
    assert.strictEqual(1, deleteReviews.deletedCount);

    res.status(204).json({ status: 204, id });
  } catch (err) {
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
  client.close();
  console.log("iz gone");
};

module.exports = {
  getAllBusinesses,
  postReview,
  getReviews,
  editReview,
  deleteReview,
};

// const businesses = require("./data.json");

// const addAllBusinesses = async () => {
//   const client = await MongoClient(MONGO_URI, options);

//   await client.connect();

//   const db = client.db("FINAL-PROJECT");
//   console.log("CONNECTED");

//   await db.collection("businesses").insertMany(businesses);

//   client.close();
//   console.log("DISCONNECTED");
// };

// addAllBusinesses();
