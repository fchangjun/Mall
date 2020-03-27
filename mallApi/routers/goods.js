const KoaRouter = require("koa-router")
const authToken = require("../middlewera/autoToken")
const authPermission = require("../middlewera/authPermissions.js")
const router = new KoaRouter({prefix:"/goods"})
const {find,
  findOneById,
  create,
  update,
  putaway,
  delete:del} = require('../controllers/goodsCtr.js')
router.get('/',authToken,authPermission,find)
router.get('/:id',authToken,findOneById)
router.post('/',authToken,create)
router.del('/:id',authToken,del)
router.put('/:id',authToken,update)
router.put('/:id/putaway',authToken,putaway)
module.exports = router