const {Schema, model} = require('moongose')

const moment = require('moment')

const skillTalentSchema = require('./skillTalentSchema')
const passiveTalentSchema = require('./passiveTalentSchema')
const constellationSchema = require('./constellationSchema')

const characterSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        updatedAt: {
            type: Date,
            default: Date.now,
            get: date => moment(date).format('YYYY-MM-D')
        },
        description: String,
        element: String,
        weapon: String,
        nation: String,
        rarity: String,
        skillTalents: [skillTalentSchema],
        passiveTalents: [passiveTalentSchema],
        constellations: [constellationSchema]

    }
)

const Character = model('character',characterSchema)

module.exports = Character