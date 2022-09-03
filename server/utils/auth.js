const jwt = require('jsonwebtoken')

//replace with env in future
const secret = 'bf93ui4nf32u32bf837f3i'
const expiration = '8h'

module.exports = {
    signToken: function ({email, username, _id}) {
        const payload = {email, username, _id}
        return jwt.sign({data: payload}, secret, {expiresIn: expiration})
    }
}
