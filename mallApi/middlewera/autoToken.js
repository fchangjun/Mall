const jsonWebToken = require("jsonwebtoken")
const {secret} = require("../config/config")
module.exports=async function(ctx,next){
  let token = ctx.headers.authorization.split("Bearer ")[1]
  try {
    let {userInfo} = jsonWebToken.verify(token,secret)
    ctx.state.userInfo = userInfo
  } catch (error) {
    return ctx.throw(402,"token失效")
  }
  await next()

}