const KoaRouter = require("koa-router")
const router = new KoaRouter({prefix:"/goods"})
const {find,
  finOne.
  create,
  update,
  putaway,
  delete:del} = require('../controllers/goodsCtr.js')
router.get('/',find)
router.get('/:id',findOne)
router.post('/',create)
router.del('/:id',del)
router.put('/:id',update)
router.put('/:id/putaway',putaway)
module.exports = router