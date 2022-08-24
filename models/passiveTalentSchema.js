const {Schema, model} = require('moongose')

const passiveTalentSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        unlock: {
            type: string,
            requred: true
        },
        description: {
            type: String,
            requred: true
        }
    }
)

module.exports = passiveTalentSchema