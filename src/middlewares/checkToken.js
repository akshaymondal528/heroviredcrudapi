// Global imports
const jwt = require("jsonwebtoken");

// Local imports
const { CONST_CREDENTIALS } = require("../config/env");
const { errorResponse, errorResponseUnauth } = require("../helpers/response");
const { ERROR } = require("../helpers/constant");
const adminModel = require("../models/admin");

/**
 * @function adminCheckToken
 * @description function to check token for admin
 * @param (req res next)
 * @author Akshay Mondal
 */
exports.adminCheckToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split("Bearer ")[1];
        let adminData = await adminModel.findOne({ authKey: token });
        if (!adminData) return errorResponse(res, ERROR.ADMIN.ADMIN_NOT_FOUND.success, EERROR.ADMIN.ADMIN_NOT_FOUND.statuscode, ERROR.ADMIN.ADMIN_NOT_FOUND.message);
        jwt.verify(token, CONST_CREDENTIALS.AUTH_SECRET, async (err, encoded) => {
            if (err) return errorResponseUnauth(res, ERROR.UNAUTH.success, ERROR.UNAUTH.statuscode, ERROR.UNAUTH.message);
            req.admin = {
                _id: encoded._id,
                username: encoded.username,
                email: encoded.username,
                isActive: encoded.isActive,
            };
            next();
        });
    } catch (error) {
        errorResponseUnauth(res, ERROR.UNAUTH.success, ERROR.UNAUTH.statuscode, ERROR.UNAUTH.message);
    }
};