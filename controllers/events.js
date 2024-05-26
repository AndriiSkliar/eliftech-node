const { Event } = require("../models/events");

const { ctrlWrapper } = require("../helpers");

const getAllEvents = async (req, res) => {
  const { page = 1, limit = 12, sort = "" } = req.query;
  const skip = (page - 1) * limit;
  const sortOption = sort ? { [sort]: 1 } : {};

  const result = await Event.find({}, "-createdAt -updatedAt", {
    skip,
    limit,
  }).sort(sortOption);

  res.status(200).json(result);
};

module.exports = {
  getAllEvents: ctrlWrapper(getAllEvents),
};
