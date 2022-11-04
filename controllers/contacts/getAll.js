const { Contact } = require("../../models/index");

const getAll = async (req, res, next) => {
  const contacts = await Contact.find({});
  res.json({
    status: "success",
    code: 200,
    data: {
      result: contacts,
    },
  });
};

module.exports = getAll;
