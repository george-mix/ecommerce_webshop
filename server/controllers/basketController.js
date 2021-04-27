const { Basket, BasketProduct, Order, OrderItem } = require('../models/models');

class BasketController {
    async getOne(req, res) {
        try {
            const { id } = req.params;
            const basket = await Basket.findOne(
                {
                    where: { userId: id },
                    include: [{ model: BasketProduct, as: 'productlist' },
                    {
                        model: Order, as: 'orders',
                        include: [{ model: OrderItem, as: 'orderitems' }]
                    }]
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

    async postOrder(req, res) {
        try {
            let { id } = req.params;

            const order = await Order.create({ basketId: id });
            let basketProducts = await BasketProduct.findAll({ where: { basketId: id } });

            basketProducts.forEach(product => OrderItem.create({
                quantity: product.quantity,
                orderId: order.id,
                productId: product.productId
            }));

            await BasketProduct.destroy({ where: { basketId: id } });

            const basket = await Basket.findOne(
                {
                    where: { userId: id },
                    include: [{ model: BasketProduct, as: 'productlist' },
                    {
                        model: Order, as: 'orders',
                        include: [{ model: OrderItem, as: 'orderitems' }]
                    }]
                });

            return res.json(basket)
        } catch (e) {
            console.log(e);
        }
    }
};


module.exports = new BasketController();