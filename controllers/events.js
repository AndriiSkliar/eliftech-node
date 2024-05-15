const { Event } = require("../models/events");

const { ctrlWrapper } = require("../helpers");

const getAllEvents = async (_, res) => {
  const result = await Event.find({}, "-createdAt, -updatedAt");
  res.status(200).json(result);
};

module.exports = {
  getAllEvents: ctrlWrapper(getAllEvents),
};
