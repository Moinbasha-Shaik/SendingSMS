const express = require("express");
const router = express.Router();
const { sendSMS } = require("../controllers/smsController.js");

router.post("/send-sms", sendSMS);

module.exports = router;
