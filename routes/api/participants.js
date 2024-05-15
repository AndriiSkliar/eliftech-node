const express = require("express");

const {addParticipant, getAll, getById } = require("../../controllers/participants");

const { validateBody, isValidId } = require("../../middlewares");

const { schemas } = require("../../models/participants");

const router = express.Router();

router.get("/", getAll);

router.get("/:id", isValidId, getById);

router.post("/registers", validateBody(schemas.addSchema), addParticipant);

module.exports = router;
