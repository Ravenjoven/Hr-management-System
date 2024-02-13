const ErrorResponse = require('../utils/errorResponse');
const jwt = require('jsonwebtoken');
const User = require("../models/userModels");

//check users authentication
exports.isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;

    // If there's no token, then the user is not authorized
    if(!token){
        return next(new ErrorResponse('Not authorized to access this route', 401));
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Make sure this matches your environment variable correctly
        req.user = await User.findById(decoded.id);
        next();
    } catch (error) {
        return next(new ErrorResponse('Not authorized to access this route', 401));
    }
}

//middleware for admin 
exports.isAdmin = (req, res, next) => {
    if(req.user.role == 0){
        return next(new ErrorResponse('Access denied, you must an admin', 401));

    }
    next();
}