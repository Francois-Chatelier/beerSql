const beersRouter = require("./beers");

const setupRoutes = (app) => {
  app.use("/beers", beersRouter);
};

module.exports = { setupRoutes };
