const model = require('./model')

module.exports = {
   GET_CARUSEL: async(_, res) => {
      try {
         res.json(await model.CARUSEL())         
      } catch (error) {
         res.json({
            status: 500,
            message: error.message
         })
      }
   }
}