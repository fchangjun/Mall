const Router = require("koa-router");
const router = new Router({prefix:'/banner'})
const {find,
  create,
  update,
  publish,
  delete:del} = require('../controllers/bannerCtr')
router.get('/',find)
router.post('/',create)
router.del('/:id',del)
router.put('/:id',update)
router.put('/:id/publish',publish)
module.exports = router