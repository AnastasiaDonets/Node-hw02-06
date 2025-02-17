const express = require("express");

const router = express.Router();

const { validateBody, isValidId, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/contact");

const ctrl = require("../../controllers/contacts");

router.get("/", authenticate, ctrl.getListContacts);

router.get("/:contactId", authenticate, isValidId, ctrl.getContactById);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addValidateSchema),
  ctrl.addContact
);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.addValidateSchema),
  ctrl.updateContact
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

router.delete("/:contactId", authenticate, isValidId, ctrl.removeContact);

module.exports = router;
