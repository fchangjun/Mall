const admin = require("../db/model/adminModel")
class AdminCtr{
  async find(ctx){
   let adminList = await admin.find()
   ctx.body={code:0,adminList,msg:'查询ok'}
  }
  findById(ctx){
    ctx.body ="获取某一个管理"
  }
  async create(ctx){
    let {userName,passWord} = ctx.request.body 
    let result = await admin.insertMany({userName,passWord})
    if(!result){ ctx.throw(-1,'管理员添加失败')}
    ctx.body ={code:0,msg:'管理员添加成功'}
  }
  async update(ctx){
    let id= ctx.params.id
    let {userName,passWord} = ctx.request.body 
    let result = await admin.findByIdAndUpdate(id,{userName,passWord} )
    if(!result){ ctx.throw(404,'管理员修改失败')}
    ctx.body={code:0,msg:'管理员修改成功'}
  }
  async delete(ctx){
    let id= ctx.params.id
    let result =await  admin.findByIdAndDelete(id)
    if(!result){ ctx.throw(404,'管理员删除失败')}
    ctx.body={code:0,msg:'管理员删除成功'}
  }
  async findOne(ctx){
    let {userName,passWord} = ctx.request.body 
    let result =await  admin.find({userName,passWord})
    if(!result.length){ ctx.throw(404,'登录失败')}
    ctx.body={code:0,msg:'登录成功'}
  }
  
}
module.exports =new AdminCtr()
