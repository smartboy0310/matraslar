const {verify} = require('../lib/jwt/jwt')
module.exports = {
   TOKEN: (req, res, next) => {
       try {
           const {cookies:{token}} = req; 
           const userStatus = verify(token)
           if(!token && !userStatus ){
               res.json({
                status: 401, 
                message: 'Unauthorized'
            })
            return
           }              
           else {
               next()
           }

       } catch (err) {
           res.json({
               status: 401, 
               message: 'Unauthorized'
           })
       }
   }
}