const { BadRequest } = require("http-errors");

const ctrlWrapper = (ctrl) => {
  return async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

const validation = (schema, errorMessage) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      throw new BadRequest(errorMessage);
    }
    next();
  };
};

module.exports = {
  ctrlWrapper,
  validation,
};
