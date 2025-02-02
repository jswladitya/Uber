const userModel = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const blackListTokenModel = require('../models/blackListToken.model');
const captainModel = require('../models/captain.model');

//to authenticate user , we need to check if user is already exists or not 
module.exports.authUser = async(req, res) => {
    // header ya cookie dono me se kahi se bhi token mil gaye to le aao
    const token = req.cookies.token || req.headers.authorization?.split('')[1];

    if(!token){
        return res.status(401).json({message:"Unauthorized"})
    }

    const isBlacklisted = await blackListTokenModel.findOne({ token: token });

    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await userModel.findById(decoded.id)

        req.user = user; //now user is available in the req object for the next middlewares

        return next();
    } catch (error) {
        return res.status(401).json({message:"Unauthorized"})
    }
}

module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];


    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const isBlacklisted = await blackListTokenModel.findOne({ token: token });

    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id)
        req.captain = captain;

        return next()
    } catch (err) {
        console.log(err);

        res.status(401).json({ message: 'Unauthorized' });
    }
}