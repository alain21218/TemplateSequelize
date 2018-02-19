const Card = require('../models').Card;

module.exports = {
  create(req, res) {
    return Card
      .create({
        name: req.body.name,
      })
      .then(card => res.status(201).send(card))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return Card
      .all()
      .then(cards => res.status(200).send(cards))
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return Card
      .findById(req.params.cardId)
      .then(card => {
        if (!card) {
          return res.status(404).send({
            message: 'Card Not Found',
          });
        }
        return card
          .update({
            name: req.body.name || card.name,
          })
          .then(() => res.status(200).send(card))  // Send back the updated
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Card
      .findById(req.params.cardId)
      .then(card => {
        if (!card) {
          return res.status(404).send({
            message: 'Card Not Found',
          });
        }
        return card
          .destroy()
          .then(() => res.status(200).send({
            message: 'Supprimé',
          }))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};