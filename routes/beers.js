const beersRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const { JsonWebTokenError } = require("jsonwebtoken");
const { findMany, findOne, createOne } = require("../models/beers");

beersRouter.get("/", (req, res) => {
  const { text, minph } = req.query;
  findMany({ filter: { text, minph } })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});

// récupère un seul ID
beersRouter.get("/:id", (req, res) => {
  findOne(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});

beersRouter.post("/", (req, res) => {
  jwt.verify(
    req.cookies.user_token,
    process.env.PRIVATE_KEY,
    (err, decoded) => {
      console.log("Helllllloooo");
      if (err) {
        res.status(401).send("You do not have correct rights");
      } else {
        res.status(201).json(createOne());
      }
    }
  );
  // createOne(req.params.id)
  //   .then((result) => res.status(201).json(result))
  //   .catch((err) => console.log(err));
});

module.exports = beersRouter;
