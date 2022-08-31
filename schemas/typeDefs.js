const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type upgrade {
        name: String
        value: String
    }

    type skillTalent {
        name: String
        type: String
        description: String
        upgrades: [upgrade]
    }

    type passiveTalent {
        name: String
        unlock: String
        description: String
    }

    type constellation {
        name: String
        description: String
        level: Int
    }

    type Character {
        name: String!
        updatedAt: String!
        description: String
        vision: String
        weaponType: String
        nation: String
        rarity: Int
        skillTalents: [skillTalent]
        passiveTalents: [passiveTalent]
        constellations: [constellation]
    }

    type Query {
        allCharacters: [Character]
    }

    input skillTalentInput {
        name: String
        type: String
        description: String
    }

    input passiveTalentInput {
        name: String
        unlock: String
        description: String
    }

    input constellationInput {
        name: String
        description: String
        level: Int
    }

    type Mutation {
        addCharacter(name: String!, updatedAt: String, description: String, element: String, weapon: String, nation: String, rarity: Int, skillTalents: [skillTalentInput], passiveTalents: [passiveTalentInput], constellations: [constellationInput]): Character
    }
`

module.exports = typeDefs