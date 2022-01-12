const beersRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const { JsonWebTokenError } = require("jsonwebtoken");
const { findMany, findOne, createOne, updateOne } = require("../models/beers");
const { checkAuth } = require("../middleware/user");

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

beersRouter.post("/", checkAuth, (req, res) => {
  res.status(201).json(createOne());
});

beersRouter.put("/", checkAuth, (req, res) => {
  res.status(201).json(updateOne());
});

module.exports = beersRouter;
