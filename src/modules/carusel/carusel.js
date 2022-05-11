require('dotenv').config()
const model = require('./model')

module.exports = {
   GET_CARUSEL: async(_, res) => {
      try {
         res.json(await model.CARUSEL())         
      } catch (error) {
         res.json({
            status: 500,
            message: error.message
         })
      }
   },
   POST_CARUSEL: async (req, res) => {
      try {
         const imgLink = req.file;
         const carusel_image = `${process.env.BACK_URL}/${imgLink.originalname}`
         const {carusel_title} = req.body
         res.json(await model.ADD_CARUSEL(carusel_title, carusel_image))
      } catch (error) {
         res.json({
            status: 500,
            message: error.message
         })
      }
   }
}