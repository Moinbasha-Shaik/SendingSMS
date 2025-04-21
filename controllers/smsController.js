
const process = require("node:process");
const twilioClient = require("../config/twilioConfig.js");

const sendSMS = async (req, res) => {
  const { name, phone } = req.body;

  // Debug
  console.log("Incoming data:", req.body);

  const confirmationLink = `https://www.linkedin.com`;

  try {
    await twilioClient.messages.create({
      body: `Hi ${name}, confirm here: ${confirmationLink}`,
      from: process.env.TWILIO_PHONE,
      to: phone,
    });

    res.status(200).json({ message: "SMS sent successfully!" });
  } catch (error) {
    console.error("SMS sending error:", error);
    res.status(500).json({ message: "Failed to send SMS" });
  }
};

module.exports = { sendSMS };
