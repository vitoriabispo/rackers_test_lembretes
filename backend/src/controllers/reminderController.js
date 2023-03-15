const remindersModel = require('../models/reminderModel');

const getAll = async (req, res) => {
  const reminders = await remindersModel.getAll();

  return res.status(200).json(reminders);
};

const createReminder = async (req, res) => {
  const newReminder = await remindersModel.createReminder(req.body);
  return res.status(201).json(newReminder);
};

const deleteReminder = async (req, res) => {
  const { id } = req.params;

  await remindersModel.deleteReminder(id);
  return res.status(204).json();
};

module.exports = {
  getAll,
  createReminder,
  deleteReminder,
};