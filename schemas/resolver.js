const {Character} = require('../models')

const resolvers = {
    Query: {
        allCharacters: async () => {
            return await Character.find()
        }
    },

    Mutation: {
        addCharacter: async (parent, args) => {
            //const {name, updatedAt, description, element, weapon, nation, rarity, skillTalents, passiveTalents, constellations} = args
            try {
                const characterData = await Character.create({args})
                if(!characterData){
                    console.error('No character data') 
                }
                return characterData
            } catch (err) {
                console.error('Failed at creating character')
            }
        }
    }
}