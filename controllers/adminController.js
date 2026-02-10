const AccessWindow = require("../models/AccessWindow");

exports.setAccessWindow = async (req, res) => {
  const { userId, startTime, endTime } = req.body;

  const accessWindow = await AccessWindow.findOneAndUpdate(
    { userId },
    { startTime, endTime },
    { upsert: true, new: true }
  );

  res.json({
    message: "Access window set successfully",
    accessWindow
  });
};
