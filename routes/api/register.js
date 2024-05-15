const express = require("express");

const { addParticipant } = require("../../controllers/register");

const { validateBody } = require("../../middlewares");

const { schemas } = require("../../models/participants");

const router = express.Router();

router.post("/", validateBody(schemas.addSchema), addParticipant);

module.exports = router;