const express = require("express");
const { validation, ctrlWrapper } = require("../../midlleWares/midlleWares");
const { contactSchema, favoriteContactSchema } = require("../../models/index");
const { contacts: ctrl } = require("../../controllers");
const router = express.Router();
const validateMiddleWareUpdate = validation(contactSchema, "Missing field");
const validateMiddleWareAdd = validation(
  contactSchema,
  "Missing required name field"
);
const validateMiddleWarePatch = validation(
  favoriteContactSchema,
  "Missing field favorite"
);

router.get("/", ctrlWrapper(ctrl.getAll));
router.get("/:contactId", ctrlWrapper(ctrl.getById));
router.post("/", validateMiddleWareAdd, ctrlWrapper(ctrl.add));
router.delete("/:contactId", ctrlWrapper(ctrl.removeById));
router.put(
  "/:contactId",
  validateMiddleWareUpdate,
  ctrlWrapper(ctrl.updateById)
);
router.patch(
  "/:contactId/favorite",
  validateMiddleWarePatch,
  ctrlWrapper(ctrl.updateStatusContact)
);

module.exports = router;
