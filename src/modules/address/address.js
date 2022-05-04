const model = require('./model')

module.exports = {
   GET_ADDRESS: async(_, res) => {
      try {
            res.json(await model.ALL_ADDRESS())         
      } catch (error) {
         res.json({
            status: 500,
            message: error.message
         })
      }
   },
   POST_ADDRESS: async(req, res) => {
      try {
         const add_image = [];
			const imgFile = req.files;
			imgFile.map((e) => {
			add_image.push(e.path);
			});
         const { add_name, add_intended, add_loc,} = req.body
            res.json(await model.ADD_ADDRESS( add_name, add_intended, add_loc, add_image))         
      } catch (error) {
         res.json({
            status: 500,
            message: error.message
         })
      }
   },
   PUT_ADDRESS: async(req, res) => {
      try {
         const add_image = [];
			const imgFile = req.files;
			imgFile.map((e) => {
			add_image.push(e.path);
			});
         const { add_id, add_name, add_intended, add_loc } = req.body

         const old_add_image = await model.SELECTED__ADDRESS(add_id)
			
			if (!imgFile.length) {
				old_add_image.add_image.map((e) =>{
					add_image.push(e)
				})
			}
         res.json(await model.UPDATE_ADDRESS(add_id, add_name, add_intended, add_loc, add_image))        
      } catch (error) {
         res.json({
            status: 500,
            message: error.message
         })
      }
   },
   DELETE_ADDRESS: async(req, res) => {
      try {
         const {add_id, add_is_delete} = req.body
         res.json( await model.DELETE_ADDRESS(add_id, add_is_delete))         
      } catch (error) {
         res.json({
            status: 500,
            message: error.message
         })
      }
   }
}