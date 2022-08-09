exports.STATUS_CODE = {
    OK: 200,
    INTERNAL_SERVER_ERROR: 500,
    UNAUTHORISED: 401,
    BADREQUEST: 400,
    NOTFOUND: 404
};

exports.SUCCESS = {
    ADD_COURSE: {
        statuscode: this.STATUS_CODE.OK,
        success: true,
        message: "Course added successfully!"
    },
    GET_COURSE: {
        statuscode: this.STATUS_CODE.OK,
        success: true,
        message: "Course data!"
    },
    DELETE_COURSE: {
        statuscode: this.STATUS_CODE.OK,
        success: true,
        message: "Delete course successfully!"
    },
    ADMIN: {
        REGISTRATION: {
            statuscode: this.STATUS_CODE.OK,
            success: true,
            message: "Admin register successfully!"
        },
        LOGIN: {
            statuscode: this.STATUS_CODE.OK,
            success: true,
            message: "Admin login successfully!"
        },
    },
};

exports.ERROR = {
    INTERNAL_SERVER_ERROR: {
        statuscode: this.STATUS_CODE.INTERNAL_SERVER_ERROR,
        success: false,
        message: "Internal server error!"
    },
    PAGE_NOT_FOUND: {
        statuscode: this.STATUS_CODE.NOTFOUND,
        success: false,
        message: "Page not found!"
    },
    UNAUTH: {
        statuscode: this.STATUS_CODE.UNAUTHORISED,
        success: false,
        message: "Invalid token!"
    },
    USERNAME_EXIST: {
        statuscode: this.STATUS_CODE.BADREQUEST,
        success: false,
        message: "Username already exist!"
    },
    EMAIL_EXIST: {
        statuscode: this.STATUS_CODE.BADREQUEST,
        success: false,
        message: "Email already exist!"
    },
    MOBILE_EXIST: {
        statuscode: this.STATUS_CODE.BADREQUEST,
        success: false,
        message: "Mobile number already exist!"
    },
    CONFIRM_PASSWORD_NOT_MATCH: {
        statuscode: this.STATUS_CODE.BADREQUEST,
        success: false,
        message: "Confirm password not match!"
    },
    INVALID_CREDENTIALS: {
        statuscode: this.STATUS_CODE.BADREQUEST,
        success: false,
        message: "Invalid credentials!"
    },
    COURSE_NOT_FOUND: {
        statuscode: this.STATUS_CODE.NOTFOUND,
        success: false,
        message: "Course not found!"
    },
    COURSE_NOT_UPDATE: {
        statuscode: this.STATUS_CODE.BADREQUEST,
        success: false,
        message: "Course not update!"
    },
    REQUIRED_COURSE_ID: {
        statuscode: this.STATUS_CODE.BADREQUEST,
        success: false,
        message: "Required course id!"
    },
    COURSE_NOT_DELETE: {
        statuscode: this.STATUS_CODE.BADREQUEST,
        success: false,
        message: "Course not delete!"
    },
    ADMIN: {
        ADMIN_NOT_FOUND: {
            statuscode: this.STATUS_CODE.NOTFOUND,
            success: false,
            message: "Admin not found!"
        },
    }
}