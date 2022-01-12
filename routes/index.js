const beersRouter = require("./beers");
const authRouter = require("./auth");

const setupRoutes = (app) => {
  app.use("/beers", beersRouter);
  app.use("/auth", authRouter);
};

module.exports = { setupRoutes };
