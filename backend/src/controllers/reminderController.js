const remindersModel = require('../models/reminderModel');

const getAll = async (req, res) => {
  try {
    const reminders = await remindersModel.getAll();
    return res.status(200).json(reminders);
  } catch (err) {
    return res.status(400).send({ error: 'Não foi possível exibir lembretes'})
  }

};

const createReminder = async (req, res) => {
  try {
    const { name, date } = req.body; 
    await remindersModel.createReminder ({
      name,
      date
    } );
    return res.status(201).send({ ok: 'Lembrete criado!'});
  } catch (err) {
    return res.status(400).send({ error: 'Não foi possível criar o lembrete'})
  }

};

const deleteReminder = async (req, res) => {
  try {
    const { id } = req.params;
    await remindersModel.deleteReminder(id);
    return res.status(204).json();
  } catch {
    return res.status(400).send({ error: 'Não foi possível excluir o lembrete'})
  }
};

module.exports = {
  getAll,
  createReminder,
  deleteReminder,
};