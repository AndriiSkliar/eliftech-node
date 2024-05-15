const { Participant } = require("../models/participants");

const { ctrlWrapper } = require("../helpers");

const addParticipant = async (req, res) => {
  const result = await Participant.create(req.body);
  res.status(201).json(result);
};

module.exports = {
  addParticipant: ctrlWrapper(addParticipant),
};
