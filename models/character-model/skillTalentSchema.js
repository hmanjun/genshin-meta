const {Schema, model} = require('moongose')

const skillTalentSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
)

module.exports = skillTalentSchema