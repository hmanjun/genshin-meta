const {Schema, model} = require('mongoose')

const upgradeSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        }
    }
)

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
        },
        upgrades: {
            type: [upgradeSchema],
            required: true
        }
    }
)

module.exports = skillTalentSchema