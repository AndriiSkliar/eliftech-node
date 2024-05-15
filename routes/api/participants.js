const express = require("express");

const ctrl = require("../../controllers/participants");

const { validateBody, isValidId } = require("../../middlewares");

const { schemas } = require("../../models/participants");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.add);

module.exports = router;
