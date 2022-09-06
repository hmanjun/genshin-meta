const {Schema, model} = require('mongoose')

const memberSchema = new Schema(
    {
        name: String,
        role: String,
        imgPath: String
    }
)

const teamSchema = new Schema(
    {
        name: String,
        members: {
            type: [memberSchema],
            required: true,
            validate: [(val) => val.length === 4, '{PATH} should have only 4 members']
        }
    }
)

module.exports = teamSchema
