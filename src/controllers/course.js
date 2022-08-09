// Local Imports
const { ERROR } = require('../helpers/constant');
const courseService = require('../services/course');
const { successResponse, errorResponse, errorResponseCatch } = require('../helpers/response');

/**
 * @function addCourse
 * @description function to add course
 * @method POST
 * @param (req res)
 * @author Akshay Mondal
 */
exports.addCourse = async (req, res) => {
    try {
        const addCourse = await courseService.addCourse(req);
        if (!addCourse.error) {
            if (addCourse.success === true) {
                successResponse(res, addCourse.success, addCourse.statuscode, addCourse.message, addCourse.data);
            } else {
                errorResponse(res, addCourse.success, addCourse.statuscode, addCourse.message, addCourse.data);
            }
        } else {
            errorResponseCatch(res, addCourse.success, addCourse.statuscode, addCourse.message, addCourse.error);
        }
    } catch (error) {
        errorResponseCatch(res, ERROR.INTERNAL_SERVER_ERROR.success, ERROR.INTERNAL_SERVER_ERROR.statuscode, ERROR.INTERNAL_SERVER_ERROR.message, error.toString());
    }
};

/**
 * @function getCourse
 * @description function to get course
 * @method POST
 * @param (req res)
 * @author Akshay Mondal
 */
exports.getCourse = async (req, res) => {
    try {
        const getCourse = await courseService.getCourse(req);
        if (!getCourse.error) {
            if (getCourse.success === true) {
                successResponse(res, getCourse.success, getCourse.statuscode, getCourse.message, getCourse.data);
            } else {
                errorResponse(res, getCourse.success, getCourse.statuscode, getCourse.message, getCourse.data);
            }
        } else {
            errorResponseCatch(res, getCourse.success, getCourse.statuscode, getCourse.message, getCourse.error);
        }
    } catch (error) {
        errorResponseCatch(res, ERROR.INTERNAL_SERVER_ERROR.success, ERROR.INTERNAL_SERVER_ERROR.statuscode, ERROR.INTERNAL_SERVER_ERROR.message, error.toString());
    }
};

/**
 * @function updateCourse
 * @description function to update course
 * @method PUT
 * @param (req res)
 * @author Akshay Mondal
 */
exports.updateCourse = async (req, res) => {
    try {
        const updateCourse = await courseService.updateCourse(req);
        if (!updateCourse.error) {
            if (updateCourse.success === true) {
                successResponse(res, updateCourse.success, updateCourse.statuscode, updateCourse.message, updateCourse.data);
            } else {
                errorResponse(res, updateCourse.success, updateCourse.statuscode, updateCourse.message, updateCourse.data);
            }
        } else {
            errorResponseCatch(res, updateCourse.success, updateCourse.statuscode, updateCourse.message, updateCourse.error);
        }
    } catch (error) {
        errorResponseCatch(res, ERROR.INTERNAL_SERVER_ERROR.success, ERROR.INTERNAL_SERVER_ERROR.statuscode, ERROR.INTERNAL_SERVER_ERROR.message, error.toString());
    }
};

/**
 * @function deleteCourse
 * @description function to delete course
 * @method DELETE
 * @param (req res)
 * @author Akshay Mondal
 */
exports.deleteCourse = async (req, res) => {
    try {
        const deleteCourse = await courseService.deleteCourse(req);
        if (!deleteCourse.error) {
            if (deleteCourse.success === true) {
                successResponse(res, deleteCourse.success, deleteCourse.statuscode, deleteCourse.message, deleteCourse.data);
            } else {
                errorResponse(res, deleteCourse.success, deleteCourse.statuscode, deleteCourse.message, deleteCourse.data);
            }
        } else {
            errorResponseCatch(res, deleteCourse.success, deleteCourse.statuscode, deleteCourse.message, deleteCourse.error);
        }
    } catch (error) {
        errorResponseCatch(res, ERROR.INTERNAL_SERVER_ERROR.success, ERROR.INTERNAL_SERVER_ERROR.statuscode, ERROR.INTERNAL_SERVER_ERROR.message, error.toString());
    }
};