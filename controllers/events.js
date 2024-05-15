const { Event } = require("../models/events");

const { ctrlWrapper } = require("../helpers");

const getAllEvents = async (req, res) => {
  const { page = 1, limit = 12 } = req.query;
  const skip = (page - 1) * limit;

  const result = await Event.find({}, "-createdAt -updatedAt", { skip, limit });
  res.status(200).json(result);
};

module.exports = {
  getAllEvents: ctrlWrapper(getAllEvents),
};
