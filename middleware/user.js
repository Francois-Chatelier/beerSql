const { findOneByEmail } = require("../models/users");

const getPassword = (req, res, next) => {
  findOneByEmail(req.body.email)
    .then((user) => {
      if (user) {
        req.body = { ...req.body, ...user };
        next();
        // On mémorise les infos de l'utlisateur ici
      } else {
        res.status(404).send("Invalid credentials");
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error retrieving data");
    });
};

module.exports = {
  getPassword,
};
