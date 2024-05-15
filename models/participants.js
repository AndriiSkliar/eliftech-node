const { Schema, model } = require("mongoose");

const Joi = require("joi");

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const defBirthDate = new Date();

const participantSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set full name for contact"],
      minLength: 3,
    },
    email: {
      type: String,
      required: [true, "Email is required: example@example.com"],
      unique: [true, "Email is exists"],
      match: emailRegexp,
    },
    birthday: {
      type: Date,
      required: [true, "Birthday is required"],
      default: defBirthDate,
    },
    event: {
      type: String,
      required: [true, "Change event is required"],
    },
    eventFeedback: {
      type: String, 
      enum: ["Social media", "Friends", "Found myself"],
      required: [true, "Feedback is required"],
      default: "Social media",
    },
  },
  { versionKey: false, timestamps: true }
);

const Participant = model("participant", participantSchema);

const addSchema = Joi.object({
  name: Joi.string().required().min(3),
  email: Joi.string().pattern(emailRegexp).required(),
  birthday: Joi.date().required(),
  event: Joi.string().required(),
  eventFeedback: Joi.string().required(),
});

const schemas = {
  addSchema,
};

module.exports = {
  Participant,
  schemas,
};
