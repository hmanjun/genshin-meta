const {Character} = require('../models')

const resolvers = {
    Query: {
        allCharacters: async () => {
            return await Character.find()
        }
    },

    Mutation: {
        addCharacter: async (parent, {name, updatedAt, description, element, weapon, nation, rarity, skillTalents, passiveTalents, constellations}) => {
            return await Character.create({name, updatedAt, description, element, weapon, nation, rarity, skillTalents, passiveTalents, constellations})
        }
    }
}

module.exports = resolvers