const Router = require("koa-router");
const router = new Router({prefix:'/admin'})
const {find,
  findOne,
  findById,
  create,
  update,
  delete:del} = require('../controllers/adminCtr')
router.get('/',find)
router.post('/',create)
router.del('/:id',del)
router.put('/:id',update)
router.post('/login',findOne)
module.exports = router