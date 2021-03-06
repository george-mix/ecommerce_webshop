const ApiError = require('../error/APIError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Basket } = require('../models/models');

const generateJWT = (id, email, role) => {
    return jwt.sign(
        { id, email, role },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    )
};

class UserController {
    async registration(req, res, next) {
        try {
            const { email, password, role } = req.body
            if (!email || !password) {
                return next(ApiError.badRequest('Invalid email or password'))
            }
            const candidate = await User.findOne({ where: { email } })
            if (candidate) {
                return next(ApiError.badRequest('User with the same email already exist'))
            }
            const hashPasword = await bcrypt.hash(password, 5);
            const user = await User.create({ email, role, password: hashPasword });
            const basket = await Basket.create({ userId: user.id });
            const token = generateJWT(user.id, user.email, user.role)

            return res.json({ token });
        } catch (e) {

        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body
            const user = await User.findOne({ where: { email } })
            if (!user) {
                return next(ApiError.internal('User not found'))
            };
            let comparePassword = bcrypt.compareSync(password, user.password);
            if (!comparePassword) {
                return next(ApiError.internal('Wrong password'))
            }
            const token = generateJWT(user.id, user.email, user.role)
            return res.json({ token });
        } catch (e) {

        }
    }

    async check(req, res) {
        try {
            const token = generateJWT(req.user.id, req.user.email, req.user.role);
            return res.json({ token })
        } catch (e) {

        }
    }
}

module.exports = new UserController()