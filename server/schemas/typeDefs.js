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
        unlock: String
    }

    type Character {
        name: String!
        updatedAt: String!
        imagePath: String
        description: String
        vision: String
        weaponType: String
        nation: String
        rarity: Int
        skillTalents: [skillTalent]
        passiveTalents: [passiveTalent]
        constellations: [constellation]
    }

    type User {
        username: String
        email: String
        password: String
    }

    type Auth {
        token: ID!
        user: User
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
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth

        addCharacter(name: String!, updatedAt: String, description: String, element: String, weapon: String, nation: String, rarity: Int, skillTalents: [skillTalentInput], passiveTalents: [passiveTalentInput], constellations: [constellationInput]): Character
    }
`

module.exports = typeDefs