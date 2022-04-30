const model = require('./model')

module.exports = {
   GET_MODEL: async(_, res) => {
      try {
            res.json(await model.ALL_MODEL())         
      } catch (error) {
         res.json({
            status: 500,
            message: error.message
         })
      }
   },
   POST_MODEL: async(req, res) => {
      try {
         const { model_name } = req.body
            res.json(await model.ADD_MODEL( model_name))         
      } catch (error) {
         res.json({
            status: 500,
            message: error.message
         })
      }
   },
   PUT_MODEL: async(req, res) => {
      try {
         const { model_id, model_name } = req.body
         res.json(await model.UPDATE_MODEL(model_id, model_name))        
      } catch (error) {
         res.json({
            status: 500,
            message: error.message
         })
      }
   },
   DELETE_MODEL: async(req, res) => {
      try {
         const {model_id, model_is_delete} = req.body
         res.json( await model.DELETE_MODEL(model_id, model_is_delete))         
      } catch (error) {
         res.json({
            status: 500,
            message: error.message
         })
      }
   }
}