const model = require('./model');
require('dotenv').config()
module.exports = {
	GET_TECHNOLOGY: async (_, res) => {
		try {
			res.json(await model.ALL_TECHNOLOGY());
		} catch (error) {
			res.json({
				status: 500,
				message: error.message,
			});
		}
	},
	POST_TECHNOLOGY: async (req, res) => {
		try {
			const imgLink = req.file;
			const tech_image = imgLink.originalname
			const { tech_name, tech_title, tech_link, tech_new, tech_active } =
			req.body;
			await model.ADD_TECHNOLOGY(
				tech_name,
				tech_title,
				tech_link,
				tech_new,
				tech_active,
				tech_image,
				),
				res.redirect(
					`${process.env.FRONT_URL}/matras-admin/admin/technologies`,
					);
				} catch (error) {
					res.json({
						status: 500,
						message: error.message,
					});
				}
			},
			PUT_TECHNOLOGY: async (req, res) => {
				try {
					let tech_image = '';
					const imgLink = req.file;
					const {
						tech_id,
						tech_name,
						tech_title,
						tech_link,
						tech_new,
						tech_active,
					} = req.body;
					const old_tech_image = await model.SELECTED__TECHNOLOGY(tech_id);
					
					if (!imgLink) {
						tech_image = old_tech_image.tech_image;
					} else {
						tech_image = imgLink.originalname;
					}
					
					await model.UPDATE_TECHNOLOGY(
						tech_id,
						tech_name,
						tech_title,
						tech_link,
						tech_new,
						tech_active,
						tech_image,
						),
						res.redirect(
							`${process.env.FRONT_URL}/matras-admin/admin/technologies`,
							);
						} catch (error) {
							res.json({
								status: 500,
								message: error.message,
							});
						}
					},
					DELETE_TECHNOLOGY: async (req, res) => {
						try {
							const { tech_id, tech_is_delete } = req.body;
							await model.DELETE_TECHNOLOGY(tech_id, tech_is_delete)
							res.redirect(`${process.env.FRONT_URL}/matras-admin/admin/technologies`)
						} catch (error) {
							res.json({
								status: 500,
								message: error.message,
							});
						}
					},
				};
				