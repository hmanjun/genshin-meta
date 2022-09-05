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

    type Comment {
        _id: ID
        name: String
        body: String
        target: String
    }

    type Query {
        allCharacters: [Character]
        allComments: [Comment]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
    }
`

module.exports = typeDefs