const model = require('./model')

module.exports = {
   GET_CUSTOMERS: async (_, res) => {
      try {
         res.json(await model.ALL_CUSTOMERS())         
      } catch (error) {
         res.json({
            status: 500,
            message: error.message
         })
      }
   },
   POST_CUSTOMERS: async(req, res) => {
      try {
         const {cust_phone} = req.body
         res.json(await model.ADD_CUSTOMERS(cust_phone))         
      } catch (error) {
         res.json({
            status: 500,
            message: error.message
         })
      }
   },
   PUT_FEEDBACK: async (req, res) => {
		try {         
       	const { cust_id, cust_feedback } = req.body;
			res.json(await model.EDIT_FEEDBACK(cust_id, cust_feedback));
		} catch (error) {
			res.json({
				status: 500,
				message: error.message,
			});
		}
	},
   DELETE_CUSTOMERS: async (req, res) => {
		try {         
       	const { cust_id, cust_is_delete } = req.body;
			res.json(await model.EDIT_FEEDBACK(cust_id, cust_is_delete));
		} catch (error) {
			res.json({
				status: 500,
				message: error.message,
			});
		}
	}
}