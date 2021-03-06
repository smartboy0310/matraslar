const model = require('./model');
const {sign} = require('../../lib/jwt/jwt')

module.exports = {
	LOGIN: async (req, res) => {
		try {
			const { login, pass } = req.body;         
			const foundAdmin = await model.ADMIN(login, pass);
			if (foundAdmin) {
				res.json({
					token: sign({ id: foundAdmin.id })
				});
				//res.cookie('token', sign({ id: foundAdmin.id }))
			} else {
				res.json({
						status: 401,
						message: 'Unauthorized'
					})
			}
		} catch (err) {
	      res.json({
				status: 500,
				message: err.message,
			})
		}
	}
};
