const {Schema, model} = require('mongoose')

const weaponSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        imagePath: {
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

module.exports = weaponSchema