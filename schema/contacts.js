const { string } = require("joi");
const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

const updateSchema = Joi.object({
  name: string().required(),
  email: string().required(),
  phone: string().required(),
});

module.exports = {
  addSchema,
  updateSchema,
};