const Router = require('express');
const router = new Router;
const categoryController = require('../controllers/categoryController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), categoryController.create);
router.get('/', categoryController.getAll);
router.put('/:id', checkRole('ADMIN'), categoryController.updateOne);
router.delete('/:id', checkRole('ADMIN'), categoryController.deleteOne);

module.exports = router;