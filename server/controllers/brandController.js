const { Brand } = require('../models/models');

class BrandController {
    async create(req, res) {
        try {
            const { name } = req.body;
            const brand = await Brand.create({ name });
            return res.json(brand);
        } catch (e) {

        }
    }

    async getAll(req, res) {
        try {
            const brands = await Brand.findAll();
            return res.json(brands);
        } catch (e) {

        }
    }

    async updateOne(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json({ message: 'ID not specified' })
            };
            const updatedBrand = await Brand.update({ name: req.body.name }, { where: { id: id } })
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
            const brand = await Brand.destroy({ where: { id: id } });
            if (brand === 0) {
                return res.status(500).json({ message: 'No such ID' })
            };
            if (brand === 1) {
                return res.json({ message: `Brand ${id} Successfully deleted` })
            };
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

module.exports = new BrandController();