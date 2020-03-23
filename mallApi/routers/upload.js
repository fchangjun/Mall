const Router = require("koa-router");
const router = new Router({prefix:'/upload'})
const {uploadImg} = require('../controllers/uploadCtr')
router.post('/',uploadImg)
module.exports = router