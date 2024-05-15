const { Schema, model } = require("mongoose");

const eventSchema = new Schema(
    {
    id: {
      type: Number,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    eventDate: {
      type: Date,
    },
    organizer: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

const Event = model("event", eventSchema);

module.exports = { Event };