const User = require("../models/addUserCredentials");

exports.addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: 'success',
      message: 'User added successfully',
      data: {
        user: newUser
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

exports.getUser = async(req,res, next)=>{
  try {
    const getuser = User.find();
    res.status(200).json({
      success:true,
      getuser
    })
  } catch (error) {
    next(error);
  }
};