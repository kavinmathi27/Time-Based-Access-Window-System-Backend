const AccessWindow = require("../models/AccessWindow");

const timeWindowMiddleware = async (req, res, next) => {
  try {
    const accessWindow = await AccessWindow.findOne({
      userId: req.user.id
    });

    if (!accessWindow) {
      return res.status(403).json({ message: "No access window assigned" });
    }
    const now = new Date();
    if (now < accessWindow.startTime || now > accessWindow.endTime) {
      return res.status(403).json({
        message: "Access denied: outside allowed time window"
      });
    }
    next();
  } catch (error) {
    res.status(500).json({ message: "Time validation failed" });
  }
};

module.exports = timeWindowMiddleware;
