const ApiError = require('../error/APIError');

class UserController {
    async registration(req, res) {

    }

    async login(req, res) {

    }
    async check(req, res, next) {
        const { id } = req.query;
        if (!id) {
            return next(ApiError.badRequest('id not set'))
        }
        res.json(id);
    }
}

module.exports = new UserController()