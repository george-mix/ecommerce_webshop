const Router = require('express');
const router = new Router;
const categoryController = require('../controllers/categoryController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), categoryController.create);
router.get('/', categoryController.getAll);
router.put('/:id', categoryController.updateOne);
router.delete('/:id', categoryController.deleteOne);

module.exports = router;