// Load environment variables
require("dotenv").config();
const process = require("node:process");
const twilio = require("twilio");

// Initialize Twilio client with credentials from .env
const client = twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_TOKEN
);

module.exports = client;
