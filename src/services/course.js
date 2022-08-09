// Global Imports
const bcrypt = require('bcrypt');

// Local Imports
const { CONST_CREDENTIALS } = require('../config/env')
const { ERROR, SUCCESS } = require('../helpers/constant');
const courseModel = require('../models/course');
const { fileUnlik, allFileUnlink } = require('../utils/fileUnlink');

let courseImageUploadDir = 'course';

/**
 * @function addCourse
 * @description function to add course
 * @param (req)
 * @author Akshay Mondal
 */
exports.addCourse = async (req) => {
    try {
        if (req.file) {
            if (!req.body.typename) req.body.typename = courseImageUploadDir;
            req.body.courseImage = `/${req.body.typename}/${req.file.filename}`;
        }
        const addCourse = await courseModel.create(req.body);
        if (addCourse && addCourse !== {}) SUCCESS.ADD_COURSE.data = addCourse;
        return SUCCESS.ADD_COURSE;
    } catch (error) {
        ERROR.INTERNAL_SERVER_ERROR.error = error.toString();
        return ERROR.INTERNAL_SERVER_ERROR;
    }
}

/**
 * @function getCourse
 * @description function to get course (single, all)
 * @param (req)
 * @author Akshay Mondal
 */
exports.getCourse = async (req) => {
    try {
        let id = req.params.id;
        let courseid = req.query.courseid;
        let whereObj = {};
        if (id && id !== '') whereObj._id = id;
        if (courseid && courseid !== '') whereObj._id = courseid;
        let getCourse = await courseModel.find(whereObj);
        if (getCourse.length === 0) return ERROR.COURSE_NOT_FOUND;
        for (let data of getCourse) {
            data.courseImage = `${CONST_CREDENTIALS.BASE_URL}${data.courseImage}`;
        }
        SUCCESS.GET_COURSE.data = getCourse;
        return SUCCESS.GET_COURSE;
    } catch (error) {
        ERROR.INTERNAL_SERVER_ERROR.error = error.toString();
        return ERROR.INTERNAL_SERVER_ERROR;
    }
}

/**
 * @function updateCourse
 * @description function to update course
 * @param (req)
 * @author Akshay Mondal
 */
exports.updateCourse = async (req) => {
    try {
        let id = req.params.id;
        let courseid = req.query.courseid;
        let whereObj = {};
        let filePath
        if (!id && !courseid) {
            filePath = `/${req.file.path.split('/').splice(1, 2).join('/')}`;
            fileUnlik(filePath);
            return ERROR.REQUIRED_COURSE_ID;
        }
        if (id && id !== '') whereObj._id = id;
        if (courseid && courseid !== '') whereObj._id = courseid;
        let courseData = await courseModel.find(whereObj);
        if (courseData.length === 0) {
            filePath = `/${req.file.path.split('/').splice(1, 2).join('/')}`;
            fileUnlik(filePath);
            return ERROR.COURSE_NOT_FOUND;
        }
        if (req.file) {
            fileUnlik(courseData[0].courseImage);
            if (!req.body.typename) req.body.typename = courseImageUploadDir;
            req.body.courseImage = `/${req.body.typename}/${req.file.filename}`;
        }
        const updateCourse = await courseModel.updateOne(whereObj, req.body, { new: true });
        if (updateCourse.modifiedCount === 0) return ERROR.COURSE_NOT_UPDATE
        SUCCESS.ADD_COURSE.data = { _id: courseData[0]._id };
        return SUCCESS.ADD_COURSE;
    } catch (error) {
        ERROR.INTERNAL_SERVER_ERROR.error = error.toString();
        return ERROR.INTERNAL_SERVER_ERROR;
    }
}

/**
 * @function deleteCourse
 * @description function to delete course (single, all)
 * @param (req)
 * @author Akshay Mondal
 */
exports.deleteCourse = async (req) => {
    try {
        let id = req.params.id;
        let courseid = req.query.courseid;
        let whereObj = {};
        if (id && id !== '') whereObj._id = id;
        if (courseid && courseid !== '') whereObj._id = courseid;
        let courseData = await courseModel.find(whereObj);
        if (courseData.length === 0) return ERROR.COURSE_NOT_FOUND;
        let deleteCourse = await courseModel.deleteMany(whereObj);
        if (deleteCourse.deletedCount === 0) {
            return ERROR.COURSE_NOT_DELETE;
        } else if (deleteCourse.deletedCount === 1) {
            fileUnlik(courseData[0].courseImage);
        } else {
            console.log('here')
            allFileUnlink(courseImageUploadDir);
        }
        SUCCESS.DELETE_COURSE.data = { deletedCount: deleteCourse.deletedCount };
        return SUCCESS.DELETE_COURSE;
    } catch (error) {
        ERROR.INTERNAL_SERVER_ERROR.error = error.toString();
        return ERROR.INTERNAL_SERVER_ERROR;
    }
}