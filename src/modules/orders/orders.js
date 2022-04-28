const model = require('./model')
const generelModel = require('../generel/model')

module.exports = {
   GET_ORDERS: async(_, res) => {
      try {
         res.json(await model.ALL_ORDERS())         
      } catch (error) {
         res.json({
            status: 500,
            message: error.message
         })
      }
   },
   POST_ORDER: async (req, res) =>{
      try {
         const {user_name, user_phone, order_pro_name, order_count } = req.body
         res.json(await model.ADD_ORDER(user_name, user_phone, order_pro_name, order_count))         
      } catch (error) {
         res.json({
            status: 500,
            message: error.message
         })
      }
   },
   PUT_FEEDBACK: async (req, res) => {
		try {         
         const count_client = await model.COUNT_FEEDBACK();
         await generelModel.UPDATE_GLAD_CLIENT(count_client.clients);

			const { order_id, order_feedback } = req.body;
			res.json(await model.EDIT_FEEDBACK(order_id, order_feedback));
		} catch (error) {
			res.json({
				status: 500,
				message: error.message,
			});
		}
	},
   DELETE_ORDER: async(req, res) => {
      try {
         const {order_id, order_is_delete} = req.body
         res.json( await model.DELETE_ORDER(order_id, order_is_delete))         
      } catch (error) {
         res.json({
            status: 500,
            message: error.message
         })
      }
   }
}