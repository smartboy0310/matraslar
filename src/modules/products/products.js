require('dotenv').config()
const model = require('./model');

module.exports = {
	GET_PRO: async (req, res) => {
		try {
			const {search_data} = req.params
			if(search_data) {
				res.json(await model.SEARCH_PRO(`%${search_data}%`))
			}
			else{
				res.json(await model.ALL_PRO());
			}
		} catch (error) {
			res.json({
				status: 500,
				message: error.message,
			});
		}
	},
	GET: async (_, res) => {
		try {
			res.redirect(`https://my.click.uz/services/pay?service_id=50&merchant_id=50&amount=1000&transaction_param=user23151&return_url=https://amaliyot-app.herokuapp.com/&card_type=uzcard`)
		} catch (error) {
			res.json({
				status: 500,
				message: error.message,
			});
		}
	},
	GET_CLICK: async (_, res) => {
		try {
			const {payment_status, payment_id} = req.params
			res.json({
				status: payment_status,
				id: payment_id
			})
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
				pro_images.push(`${process.env.BACK_URL}/${e.originalname}`);
			});

			const {
				pro_name,
				pro_price,
				pro_particle,
				pro_format,
				pro_guarantee,
				pro_size,
				pro_info,
				model_id,
			} = req.body;

			const pro_active = req.body.pro_active ? true : false;
			const pro_new = req.body.pro_new ? true : false;
			const pro_share_price = req.body.pro_share_price ? req.body.pro_share_price : null;
			
				await model.ADD_PRO(
					pro_name,
					pro_price - 0,
					pro_particle - 0,
					pro_format,
					pro_guarantee,
					pro_size,
					pro_share_price,
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
				console.log(e.originalname);
				pro_images.push(`${process.env.BACK_URL}/${e.originalname}`);
			});
			console.log(pro_images);
			const {
				pro_id,
				pro_name,
				pro_price,
				pro_particle,
				pro_format,
				pro_guarantee,
				pro_size,
				pro_info,
				model_id,
			} = req.body;
			const pro_share_price = req.body.pro_share_price ? req.body.pro_share_price : null;
			const pro_active = req.body.pro_active ? true : false;
			const pro_new = req.body.pro_new ? true : false;
			
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
					pro_share_price,
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
