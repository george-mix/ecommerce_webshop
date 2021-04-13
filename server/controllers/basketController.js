const { Basket, BasketProduct } = require('../models/models');

class BasketController {
    async getOne(req, res) {
        try {
            const { id } = req.params;
            const basket = await Basket.findOne({ where: { userId: id } });
            return res.json(basket);
        } catch (e) {
            console.log(e);
        }
    }
};

module.exports = new BasketController();