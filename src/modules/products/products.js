const model = require('./model')

module.exports = {
   GET_PRO: async(_, res) => {
      try {
            res.json(await model.ALL_PRO())         
      } catch (error) {
         res.json({
            status: 500,
            message: error.message
         })
      }
   },
   POST_PRO: async(req, res) => {
      try {
         const {pro_name, pro_price, pro_particle, pro_format, pro_guarantee, pro_size,  pro_share_price, pro_info, pro_new, pro_active, pro_images, pro_is_delete, model_id } = req.body
            res.json(await model.ADD_PRO(pro_name, pro_price, pro_particle, pro_format, pro_guarantee, pro_size,  pro_share_price, pro_info, pro_new, pro_active, pro_images, pro_is_delete, model_id))         
      } catch (error) {
         res.json({
            status: 500,
            message: error.message
         })
      }
   },
   PUT_PRO: async(req, res) => {
      try {
         const { pro_id, pro_name, pro_price, pro_particle, pro_format, pro_guarantee, pro_size,  pro_share_price, pro_info, pro_new, pro_active, pro_images, pro_is_delete, model_id } = req.body
         res.json(await model.UPDATE_PRO(pro_id,pro_name, pro_price, pro_particle, pro_format, pro_guarantee, pro_size,  pro_share_price, pro_info, pro_new, pro_active, pro_images, pro_is_delete, model_id))        
      } catch (error) {
         res.json({
            status: 500,
            message: error.message
         })
      }
   },
   DELETE_PRO: async(req, res) => {
      try {
         const {pro_id, pro_is_delete} = req.body
         res.json( await model.DELETE_PRO(pro_id, pro_is_delete))         
      } catch (error) {
         res.json({
            status: 500,
            message: error.message
         })
      }
   },
   PUT_STATUS: async(req, res) => {
      try {
         const {pro_id, pro_active} = req.body
         res.json( await model.EDIT_STATUS(pro_id, pro_active))         
      } catch (error) {
         res.json({
            status: 500,
            message: error.message
         })
      }
   }
}