const Router = require('express');
const router = new Router;
const basketController = require('../controllers/basketController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.get('/:id', checkRole('USER'), basketController.getOne);
router.post('/plus/:id', checkRole('USER'), basketController.postProductIntoBasket);
router.post('/minus/:id', checkRole('USER'), basketController.decrementProductInBasket);

module.exports = router;