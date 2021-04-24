const { Basket, BasketProduct } = require('../models/models');

class BasketController {
    async getOne(req, res) {
        try {
            const { id } = req.params;
            const basket = await Basket.findOne(
                {
                    where: { userId: id },
                    include: [{ model: BasketProduct, as: 'productlist' }]
                });
            return res.json(basket);
        } catch (e) {
            console.log(e);
        }
    }

    async postProductIntoBasket(req, res) {
        try {
            let { id } = req.params;
            let { productId } = req.body;

            let existingProduct = await BasketProduct.findOne({ where: { basketId: id, productId: productId } });

            if (existingProduct) {
                await existingProduct.increment('quantity', { by: 1 });
            }

            if (!existingProduct) {
                await BasketProduct.create({ basketId: id, productId: productId });
            }
            let updatedBasket = await Basket.findOne(
                {
                    where: { userId: id },
                    include: [{ model: BasketProduct, as: 'productlist' }]
                });

            return res.json(updatedBasket)
        } catch (e) {
            console.log(e);
        }
    }

    async decrementProductInBasket(req, res) {
        try {
            let { id } = req.params;
            let { productId } = req.body;

            let existingProduct = await BasketProduct.findOne({ where: { basketId: id, productId: productId } });

            if (existingProduct == null || existingProduct == undefined) { return res.json(null) };

            existingProduct.dataValues.quantity == 1 ?
                await existingProduct.destroy() :
                await existingProduct.decrement('quantity', { by: 1 });

            let updatedBasket = await Basket.findOne(
                {
                    where: { userId: id },
                    include: [{ model: BasketProduct, as: 'productlist' }]
                });

            return res.json(updatedBasket)
        } catch (e) {
            console.log(e);
        }
    }
};


module.exports = new BasketController();