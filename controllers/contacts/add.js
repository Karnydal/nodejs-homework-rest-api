const contactsOperation = require("../../models/contacts");

const add = async (req, res, next) => {
  const result = await contactsOperation.addContact(req.body);
  res.status(201).json({
    status: "succes",
    code: 201,
    data: { result },
  });
};

module.exports = add;