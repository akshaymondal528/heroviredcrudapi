// Global Imports
const router = require('express').Router();

// Local Imports
const { upload } = require('../utils/multer');
const courseController = require('../controllers/course');

let uploadDir = 'course';

router.post('/add-course', upload(uploadDir).single('courseImage'), courseController.addCourse);
router.get('/get-course/:id?', courseController.getCourse);
router.put('/update-course/:id?', upload(uploadDir).single('courseImage'), courseController.updateCourse);
router.delete('/delete-course/:id?', courseController.deleteCourse);

module.exports = router;