const Joi = require("joi");

const contactSchema = Joi.object({
  name: Joi.string().alphanum().min(3).required(),
  email: Joi.string().email().required(),
  phone: Joi.number().integer().required(),
});

module.exports = {
  contactSchema,
};





// const addSchema = Joi.object({
//   name: Joi.string().alphanum().min(3).required(),
//   email: Joi.string().email().required(),
//   phone: Joi.string().integer().required(),
// });

// const updateSchema = Joi.object({
//   name: Joi.string().alphanum().min(3).required(),
//   email: Joi.string().email().required(),
//   phone: Joi.string().integer().required(),
// });

// module.exports = {
//   addSchema,
//   updateSchema,
// };