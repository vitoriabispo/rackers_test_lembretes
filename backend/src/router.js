const express = require('express');
const router = express.Router();


const reminderController = require('./controllers/reminderController');
const reminderMiddleware = require('./middlewares/reminderMiddleware');

router.get('/', reminderController.getAll);
router.post('/', reminderMiddleware.validateBody, reminderController.createReminder);
router.delete('/:id', reminderController.deleteReminder);

module.exports = router;