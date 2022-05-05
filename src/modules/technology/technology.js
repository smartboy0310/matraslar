const model = require('./model');

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
			const tech_image = imgLink.path;
			const { tech_name, tech_title, tech_link, tech_new, tech_active } =
				req.body;
			res.json(
				await model.ADD_TECHNOLOGY(
					tech_name,
					tech_title,
					tech_link,
					tech_new,
					tech_active,
					tech_image,
				),
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
			const imgLink = req.file;
			const tech_image = imgLink.path;

			const {
				tech_id,
				tech_name,
				tech_title,
				tech_link,
				tech_new,
				tech_active,
			} = req.body;
			if (!imgLink) {
				tech_image = await model.SELECTED__TECHNOLOGY(tech_id);
			}
			res.json(
				await model.UPDATE_TECHNOLOGY(
					tech_id,
					tech_name,
					tech_title,
					tech_link,
					tech_new,
					tech_active,
					tech_image,
				),
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
			res.json(await model.DELETE_TECHNOLOGY(tech_id, tech_is_delete));
		} catch (error) {
			res.json({
				status: 500,
				message: error.message,
			});
		}
	},
};
