const uuid = require('uuid');
const path = require('path');
const { Product, ProductInfo } = require('../models/models');
const ApiError = require('../error/APIError');

class ProductController {
    async create(req, res, next) {
        try {
            let { name, price, brandId, categoryId, info } = req.body;
            const { img } = req.files;
            let fileName = uuid.v4() + ".jpg";
            img.mv(path.resolve(__dirname, '..', 'static', fileName));

            const product = await Product.create({ name, price, brandId, categoryId, img: fileName });

            if (info) {
                info = JSON.parse(info);
                info.forEach(i =>
                    ProductInfo.create({
                        title: i.title,
                        description: i.description,
                        productId: product.id
                    })
                )
            }


            return res.json(product);
        }
        catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        try {
            let { brandId, categoryId, limit, page } = req.query;
            page = page || 1;
            limit = limit || 9;
            let offset = page * limit - limit;
            let products;
            if (!brandId && !categoryId) {
                products = await Product.findAndCountAll({ limit, offset })
            }
            if (brandId && !categoryId) {
                products = await Product.findAndCountAll({ where: { brandId }, limit, offset })
            }
            if (!brandId && categoryId) {
                products = await Product.findAndCountAll({ where: { categoryId }, limit, offset })
            }
            if (brandId && categoryId) {
                products = await Product.findAndCountAll({ where: { brandId, categoryId }, limit, offset })
            }
            return res.json(products);
        } catch (e) {

        }
    }

    async getOne(req, res) {
        try {
            const { id } = req.params;
            const product = await Product.findOne(
                {
                    where: { id },
                    include: [{ model: ProductInfo, as: 'info' }]
                }
            )
            return res.json(product);
        } catch (e) {

        }
    }

    async updateOne(req, res) {
        try {
            const { id } = req.params;
            const updatedProduct = await Product.update(req.body, { where: { id: id } });
            return res.json(updatedProduct);

        } catch (e) {
        }
    }

    async deleteOne(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json({ message: 'ID not specified' })
            };
            const brand = await Product.destroy({ where: { id: id } });
            if (brand === 0) {
                return res.status(500).json({ message: 'No such ID' })
            };
            if (brand === 1) {
                return res.json({ message: `Product ${id} Successfully deleted` })
            };
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

module.exports = new ProductController();