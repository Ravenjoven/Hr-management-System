const Event = require("../models/eventModels");

exports.addEvent = async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    res.status(201).json({
      status: 'success',
      message: 'Event added successfully',
      data: {
        event: newEvent
      }
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
};

exports.getEvent = async(req,res, next)=>{
  try {
    const event = await Event.find();
    if (!event || event.length === 0) {
      return res.status(404).json({ success: false, message: "No event found" });
    }
    res.status(200).json({
      success:true,
      event
    })
  } catch (error) {
    next(error);
    console.error(error);
   
  }
};