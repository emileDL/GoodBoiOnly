// "use strict";

// const express = require("express");
// const path = require("path");

// const PORT = 6767;

// const routes = require("./routes");

// const app = express();

// registering middleware
// app.use(express.json());
// app.use(morgan("dev"));
// imports the routes file
// app.use(require("./routes"));

// const server = app.listen(PORT, function () {
// console.info("Listening on port " + server.address().port);
// });

"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const {
  getAllBusinesses,
  postReview,
  getReviews,
  editReview,
  deleteReview,
} = require("./handlers");

const PORT = 6767;

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // COOL ENDPOINTS HERE👇

  //ADD BUSINESSES TO MONGO DB
  // .post("all-businesses", addAllBusinesses)

  //GET ALL BUSINESSES
  .get("/businesses", getAllBusinesses)

  //POST A REVIEW
  .post("/reviews", postReview)

  //GET ALL REVIEWS
  .get("/reviews", getReviews)

  //EDIT A REVIEW
  .put("/reviews", editReview)

  //DELETE A REVIEW
  .delete("/review/:id", deleteReview)

  //SEARCHBAR
  // .get("/search", async (req, res) => {
  //   try {
  //     let result = await collection
  //       .aggregate([
  //         {
  //           $search: {
  //             autocomplete: {
  //               query: `${req.query.query}`,
  //               path: "name",
  //               fuzzy: {
  //                 maxEdits: 2,
  //                 prefixLength: 3,
  //               },
  //             },
  //           },
  //         },
  //       ])
  //       .toArray();
  //     res.send(result);
  //   } catch (e) {
  //     res.status(500).send({ message: e.message });
  //   }
  // })

  // .get("/get/:id", async (req, res) => {
  //   try {
  //     let result = await collection.findOne({ _id: ObjectID(req.params.id) });
  //     res.send(result);
  //   } catch (e) {
  //     res.status(500).send({ message: e.message });
  //   }
  // })

  //GET ALL BUSINESSES FROM A SINGLE CATEGORY

  //GET A SINGLE BUSINESS

  //ADD A SINGLE BUSINESS

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
