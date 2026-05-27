const { Router } = require("express");
const { body } = require("express-validator");

const { getServices, getServiceById, addService, updateServiceById, deleteServiceById } = require("../controllers/services.controller");
const enforceValidations = require("../middlewares/enforceValidations");

const router = Router();

router.get("/", getServices);
router.get("/:id", getServiceById);
router.post("/", [
  body('name', 'Name required').not().isEmpty(),
  body('description', 'Description required').not().isEmpty(),
  body('price', 'Price required').not().isEmpty(),
  enforceValidations
], addService);
router.put("/:id", updateServiceById);
router.delete("/:id", deleteServiceById);

module.exports = router;
