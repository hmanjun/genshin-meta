const {Schema, model} = require('mongoose')

const passiveTalentSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        unlock: {
            type: String,
            requred: true
        },
        description: {
            type: String,
            requred: true
        }
    }
)

module.exports = passiveTalentSchema