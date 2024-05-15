const { Schema, model } = require("mongoose");
const Joi = require("joi");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set full name for contact"],
    },
    email: {
      type: String,
      required: [true, "Set email for contact"],
    },
    dateOfBirth: {
      type: String,
      required: [true, "Set date of birth for contact"],
    },
    event: {
      type: String,
      required: [true, "Change event for contact"],
    },
    eventFeedback: {
      type: String, 
      enum: ["Social media", "Friends", "Found myself"],
      required: [true, "Set feedback for contact"],
      default: "Social media",
    },
  },
  { versionKey: false, timestamps: true }
);

const Contact = model("contact", contactSchema);

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  dateOfBirth: Joi.string().required(),
  event: Joi.string().required(),
  eventFeedback: Joi.string().required(),
});

const schemas = {
  addSchema,
};

module.exports = {
  Contact,
  schemas,
};
