// Local Imports
const { CONST_CREDENTIALS } = require('../config/env');
const { adminCheckToken } = require('../middlewares/checkToken');
const auth = require('./auth');
const course = require('./course');

const courseRoutePrefix = CONST_CREDENTIALS.API_ROUTE_PREFIX;

exports.courseRoute = (app) => {
    app.use(courseRoutePrefix, auth);
    app.use(courseRoutePrefix, adminCheckToken, course);
};