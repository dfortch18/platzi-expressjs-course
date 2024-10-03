const Joi = require("joi");

const createProductSchema = Joi.object({
  id: Joi.string(),
  name: Joi.string().min(3).max(20).required(),
  price: Joi.number().integer().positive().required(),
  image: Joi.string().uri()
});


module.exports = createProductSchema;
