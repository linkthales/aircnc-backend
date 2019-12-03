const Spot = require('../models/Spot');

// index, show, store, update, destroy

module.exports = {
  async show(request, response) {
    const { user_id } = request.headers;

    const spots = await Spot.find({ user: user_id });

    return response.json(spots);
  }
};
