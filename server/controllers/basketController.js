const { _attributes } = require('../db');
const { Basket, BasketProduct, Order, OrderItem, Product } = require('../models/models');

class BasketController {
    async getOne(req, res) {
        try {
            const { id } = req.params;
            const basket = await Basket.findOne(
                {
                    where: { userId: id },
                    order: [
                        [{model: BasketProduct, as: 'productlist'},
                         'createdAt', 'ASC'], 
                         [{model: Order, as: 'orders'},
                         'createdAt', 'DESC'] ],
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

            let product = await Product.findByPk(productId);

            let existingProduct = await BasketProduct.findOne({ where: { basketId: id, productId: productId } });

            if (existingProduct) {
                await existingProduct.increment('quantity', { by: 1 });

            }
            if (!existingProduct) {
                await BasketProduct.create({ basketId: id, productId: productId });
            }

            let incrementedBasket = await Basket.findOne(
                {where: { userId: id }});
            await incrementedBasket.increment('totalPrice', { by: product.price });

            let updatedBasket = await Basket.findOne(
                {
                    where: { userId: id },
                    order: [[{model: BasketProduct, as: 'productlist'},
                         'createdAt', 'ASC']],
                    include: [{ model: BasketProduct, as: 'productlist'}]
                });

            return res.json(updatedBasket);
        } catch (e) {
            console.log(e);
        }
    }

    async decrementProductInBasket(req, res) {
        try {
            let { id } = req.params;
            let { productId } = req.body;

            let product = await Product.findByPk(productId);

            let existingProduct = await BasketProduct.findOne({ where: { basketId: id, productId: productId } });

            if (existingProduct == null || existingProduct == undefined) { return res.json(null) };

            existingProduct.dataValues.quantity == 1 ?
                await existingProduct.destroy() :
                await existingProduct.decrement('quantity', { by: 1 });

            let updatedBasket = await Basket.findOne(
                {
                    where: { userId: id },
                    order: [[{model: BasketProduct, as: 'productlist'},
                         'createdAt', 'ASC']],
                    include: [{ model: BasketProduct, as: 'productlist' }]
                });

            if (updatedBasket.totalPrice > 0) {
                await updatedBasket.decrement('totalPrice', { by: product.price });
            }

            return res.json(updatedBasket)
        } catch (e) {
            console.log(e);
        }
    }

    async postOrder(req, res) {
        try {
            let { id } = req.params;

            const basket = await Basket.findOne({ where: { userId: id } });

            const order = await Order.create({ basketId: id, totalPrice: basket.totalPrice });

            let basketProducts = await BasketProduct.findAll({ where: { basketId: id } });
            basketProducts.forEach(product => OrderItem.create({
                quantity: product.quantity,
                orderId: order.id,
                productId: product.productId
            }));

            await BasketProduct.destroy({ where: { basketId: id } });
            basket.totalPrice = 0;
            await basket.save();

            const updatedBasket = await Basket.findOne(
                {
                    where: { userId: id },
                    order: [
                        [{model: BasketProduct, as: 'productlist'},
                         'createdAt', 'ASC'], 
                         [{model: Order, as: 'orders'},
                         'createdAt', 'DESC'] ],
                    include: [{ model: BasketProduct, as: 'productlist' },
                    {
                        model: Order, as: 'orders',
                        include: [{ model: OrderItem, as: 'orderitems' }]
                    }]
                });

            return res.json(updatedBasket)
        } catch (e) {
            console.log(e);
        }
    }
};


module.exports = new BasketController();