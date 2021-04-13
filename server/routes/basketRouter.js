const Router = require('express');
const router = new Router;
const basketController = require('../controllers/basketController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.get('/:id', checkRole('USER'), basketController.getOne);

module.exports = router;