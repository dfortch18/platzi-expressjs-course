const Joi = require("joi");

const getProductSchema = Joi.object({
  id: Joi.string().uuid().required()
});

module.exports = getProductSchema;
