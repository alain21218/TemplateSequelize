const cardsController = require('../controllers').cards;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Cards API!',
  }));

  app.post('/api/cards', cardsController.create);
  app.get('/api/cards', cardsController.list);
  app.put('/api/card/:cardId', cardsController.update);
  app.delete('/api/card/:cardId', cardsController.delete);
};