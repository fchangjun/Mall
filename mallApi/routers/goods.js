const KoaRouter = require("koa-router")
const router = new KoaRouter({prefix:"/goods"})
router.get('/',(ctx)=>{
  ctx.body='获取商品'
})

router.post("/",(ctx)=>{
  ctx.body="添加商品"
})
router.del("",ctx => {
  ctx.body = "删除商品"
})
router.put("/",ctx =>{
  ctx.body= '修改商品'
})
module.exports = router