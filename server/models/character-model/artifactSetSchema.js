const {Schema, model} = require('mongoose')

const benefitSchema = new Schema(
    {
        piece: Number,
        description: String
    }
)

const artifactSetScheme = new Schema(
    {
        names: {
            type: [String],
            required: true
        },
        mainStats: {
            type: String,
            required: true
        },
        benefits: {
            type: [benefitSchema],
            required: true
        }
    }
)

module.exports = artifactSetScheme