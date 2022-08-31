const {Schema, model} = require('mongoose')

const moment = require('moment')

const skillTalentSchema = require('./skillTalentSchema')
const passiveTalentSchema = require('./passiveTalentSchema')
const constellationSchema = require('./constellationSchema')
const teamSchema = require('./teamSchema')
const artifactSetSchema = require('./artifactSetSchema')
const weaponSchema = require('./weaponSchema')

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
        vision: String,
        weaponType: String,
        nation: String,
        rarity: Number,
        skillTalents: [skillTalentSchema],
        passiveTalents: [passiveTalentSchema],
        constellations: [constellationSchema],
        premiumWeapon: weaponSchema,
        budgetWeapon: weaponSchema,
        artifactSets: [artifactSetSchema],
        teams: [teamSchema]
    }
)

const Character = model('character',characterSchema)

module.exports = Character