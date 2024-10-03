const Joi = require("joi");

const updateProductSchema = Joi.object({
  id: Joi.string(),
  name: Joi.string().min(3).max(20),
  price: Joi.number().integer().positive(),
  image: Joi.string().uri()
});

module.exports = updateProductSchema;
