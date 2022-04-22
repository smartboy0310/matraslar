const {sign, verify} = require('jsonwebtoken')
const SECRET_KEY = process.env.SECRET_KEY || 'SECRET_KEY'

module.exports = {
   sign: (data) => sign({data}, SECRET_KEY, {expiresIn: '1h'}),
   verify: (data) => verify(data, SECRET_KEY)
}

