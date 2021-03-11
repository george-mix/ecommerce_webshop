const { Category } = require('../models/models');


class CategoryController {
    async create(req, res) {
        try {
            const { name } = req.body;
            const category = await Category.create({ name });
            return res.json(category);
        } catch (e) {

        }
    }

    async getAll(req, res) {
        try {
            const categories = await Category.findAll();
            return res.json(categories);
        } catch (e) {

        }
    }

    async updateOne(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json({ message: 'ID not specified' })
            };
            const updatedBrand = await Category.update({ name: req.body.name }, { where: { id: id } })
            return res.json(updatedBrand);
        } catch (e) {
            return res.json(e)
        }
    }

    async deleteOne(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json({ message: 'ID not specified' })
            };
            const brand = await Category.destroy({ where: { id: id } });
            if (brand === 0) {
                return res.status(500).json({ message: 'No such ID' })
            };
            if (brand === 1) {
                return res.json({ message: `Category ${id} Successfully deleted` })
            };
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

module.exports = new CategoryController();