const model = require('./model');

module.exports = {
	GET_PRO: async (_, res) => {
		try {
			res.json(await model.ALL_PRO());
		} catch (error) {
			res.json({
				status: 500,
				message: error.message,
			});
		}
	},
	POST_PRO: async (req, res) => {
		try {
			const pro_images = [];
			const imgFile = req.files;
			imgFile.map((e) => {
				pro_images.push(e.path);
			});

			const {
				pro_name,
				pro_price,
				pro_particle,
				pro_format,
				pro_guarantee,
				pro_size,
				pro_share_price,
				pro_info,
				model_id,
			} = req.body;

			const pro_active = req.body.pro_active ? true : false;
			const pro_new = req.body.pro_new ? true : false;
			
				await model.ADD_PRO(
					pro_name,
					pro_price - 0,
					pro_particle - 0,
					pro_format,
					pro_guarantee,
					pro_size,
					pro_share_price - 0,
					pro_info,
					pro_new,
					pro_active,
					pro_images,
					model_id - 0,
				),
				res.redirect(`${process.env.FRONT_URL}/matras-admin/admin/products`)

		} catch (error) {
			res.json({
				status: 500,
				message: error.message,
			});
		}
	},
	PUT_PRO: async (req, res) => {
		try {
			const pro_images = [];
			const imgFile = req.files;
			imgFile.map((e) => {
			pro_images.push(e.path);
			});
			const {
				pro_id,
				pro_name,
				pro_price,
				pro_particle,
				pro_format,
				pro_guarantee,
				pro_size,
				pro_share_price,
				pro_info,
				pro_new,
				pro_active,
				model_id,
			} = req.body;

			const old_pro_image = await model.SELECTED__PRO(pro_id)
			
			if (!imgFile.length) {
				old_pro_image?.pro_images.map((e) =>{
					pro_images.push(e)
				})
			}
			
		
				await model.UPDATE_PRO(
					pro_id - 0,
					pro_name,
					pro_price - 0,
					pro_particle - 0,
					pro_format,
					pro_guarantee,
					pro_size,
					pro_share_price - 0,
					pro_info,
					pro_new,
					pro_active,
					pro_images,
					model_id,
				)

				res.redirect(`${process.env.FRONT_URL}/matras-admin/admin/products`)

			
		} catch (error) {
			res.json({
				status: 500,
				message: error.message,
			});
		}
	},
	DELETE_PRO: async (req, res) => {
		try {
			const { pro_id, pro_is_delete } = req.body;
			res.json(await model.DELETE_PRO(pro_id, pro_is_delete));
		} catch (error) {
			res.json({
				status: 500,
				message: error.message,
			});
		}
	},
	PUT_STATUS: async (req, res) => {
		try {
			const { pro_id, pro_active } = req.body;

			await model.EDIT_STATUS(pro_id, pro_active)
			res.json({
				status: 200,
				message: 'Ok',
			})
		} catch (error) {
			res.json({
				status: 500,
				message: error.message,
			});
		}
	},
};
