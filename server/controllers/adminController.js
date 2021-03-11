const ApiError = require('../error/APIError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Admin } = require('../models/models');

const generateJWT = (id, name, role) => {
    return jwt.sign(
        { id, name, role },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    )
};

class AdminController {
    async registration(req, res, next) {
        try {
            const { name, password, role } = req.body
            if (!name || !password) {
                return next(ApiError.badRequest('Invalid name or password'))
            }
            const candidate = await Admin.findOne({ where: { name } })
            if (candidate) {
                return next(ApiError.badRequest('User with the same name already exist'))
            }
            const hashPasword = await bcrypt.hash(password, 5);
            const admin = await Admin.create({ name, role, password: hashPasword });
            const token = generateJWT(admin.id, admin.name, admin.role)

            return res.json({ token });
        } catch (e) {

        }
    }

    async login(req, res, next) {
        try {
            const { name, password } = req.body
            const admin = await Admin.findOne({ where: { name } })
            if (!admin) {
                return next(ApiError.internal('User not found'))
            };
            let comparePassword = bcrypt.compareSync(password, admin.password);
            if (!comparePassword) {
                return next(ApiError.internal('Wrong password'))
            }
            const token = generateJWT(admin.id, admin.name, admin.role)
            return res.json({ token });
        } catch (e) {

        }
    }

    async check(req, res) {
        try {
            const token = generateJWT(req.admin.id, req.admin.name, req.admin.role);
            return res.json({ token })
        } catch (e) {

        }
    }
}

module.exports = new AdminController();