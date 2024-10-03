const { API_VERSION } = require("../config");
const { Router } = require("express");
const productRouter = require("./product.router");
const userRouter = require("./user.router");
const categoryRouter = require("./category.router");

function addApiRouters(app) {
  const apiRouter = Router();

  apiRouter.use('/products', productRouter);
  apiRouter.use('/users', userRouter);
  apiRouter.use('/categories', categoryRouter);

  app.use(`/api/${API_VERSION}`, apiRouter);
}

module.exports = { addApiRouters };
