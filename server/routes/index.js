const Router = require('express');
const router = new Router;

const adminRouter = require('./adminRouter');
const brandRouter = require('./brandRouter');
const basketRouter = require('./basketRouter');
const categoryRouter = require('./categoryRouter');
const productRouter = require('./productRouter');
const userRouter = require('./userRouter');


router.use('/admin', adminRouter)
router.use('/user', userRouter)
router.use('/brand', brandRouter)
router.use('/category', categoryRouter)
router.use('/product', productRouter)
router.use('/basket', basketRouter)

module.exports = router;