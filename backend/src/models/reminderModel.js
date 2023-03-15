const connection = require('./connection');

const getAll = async () => {
  const  [reminders] = await connection.execute('SELECT * FROM reminders');

  return reminders;
};

const createReminder = async (reminder) => {
  const { name, date } = reminder;

  const [newReminder] = await connection.execute('INSERT INTO reminders(name, date) VALUES (?, ?)', [name, date]);
  return {insertId: newReminder.insertId};
};

const deleteReminder = async (id) => {
  const deletedReminder = await connection.execute('DELETE FROM reminders  WHERE id = ?', [id]);

  return deletedReminder;
};

module.exports = {
  getAll,
  createReminder,
  deleteReminder,
};