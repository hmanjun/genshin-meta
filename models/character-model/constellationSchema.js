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
        unlock: {
            type: String,
            required: true
        }
    }
)

module.exports = constellationSchema