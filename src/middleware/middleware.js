module.exports = {
   TOKEN: (req, res, next) => {
       try {
           const {cookies:{token}} = req; 
           if(!token ){
               res.redirect('/')
           }
           const userStatus = verify(token)

           if(!userStatus){
               res.redirect('/')
           } 
           else {
               next()
           }

       } catch (err) {
           res.status(401).send({
               status: 401, 
               message: 'Unauthorized'
           })
       }
   }
}