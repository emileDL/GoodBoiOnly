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
const { getAllBusinesses } = require("./handlers");

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

  //GET ALL BUSINESSES FROM A SINGLE CATEGORY

  //GET A SINGLE BUSINESS

  //ADD A SINGLE BUSINESS

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
