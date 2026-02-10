const AccessWindow = require("../models/AccessWindow");

exports.getAccessStatus = async (req, res) => {
  const accessWindow = await AccessWindow.findOne({
    userId: req.user.id
  });

  if (!accessWindow) {
    return res.json({ status: "No access window assigned" });
  }

  res.json({
    startTime: accessWindow.startTime,
    endTime: accessWindow.endTime
  });
};
