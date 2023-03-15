const express = require('express');
const router = express.Router();


const reminderController = require('./controllers/reminderController');
const reminderMiddleware = require('./middlewares/reminderMiddleware');

router.get('/reminders', reminderController.getAll);
router.post('/reminders', reminderMiddleware.validateBody, reminderController.createReminder);
router.delete('/reminders/:id', reminderController.deleteReminder);

module.exports = router;