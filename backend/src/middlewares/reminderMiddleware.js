const validateBody = (req, res, next) => {
  const { body } = req;

  if(body.name == undefined ||  body.name == '' || body.date == undefined || body.date == ''){
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }
  next();
};

module.exports = {
  validateBody,
};