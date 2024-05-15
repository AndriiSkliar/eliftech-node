const { Participant } = require("../models/participants");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (_, res) => {
  const result = await Participant.find({}, "-updatedAt").sort({createdAt: -1, _id: -1,});
  res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params
  const result = await Participant.find({ eventId: { $regex: id } });
  
  if (!result || result.length === 0) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(result);
}; 

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
};
