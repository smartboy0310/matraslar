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
   }
}