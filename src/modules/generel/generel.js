const model = require('./model')

module.exports = {
   GET_GENEREL: async(_, res) => {
      try {
         res.json(await model.GENEREL())         
      } catch (error) {
         res.json({
            status: 500,
            message: error.message
         })
      }
   },
   POST_GENEREL: async (req, res) => {
      try {
         const {phone, practice, guarantee, delivery} = req.body
         res.json( await model.ADD_GENEREL(phone, practice, guarantee, delivery))
      } catch (error) {
         res.json({
            status: 500,
            message: error.message
         })
      }
   }
}