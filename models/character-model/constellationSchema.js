const {Schema, model} = require('mongoose')

const constellationSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        level: {
            type: Number,
            required: true
        }
    }
)

module.exports = constellationSchema