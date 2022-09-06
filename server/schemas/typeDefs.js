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

    type Comment {
        _id: ID
        name: String
        body: String
        target: String
    }

    type Weapon {
        name: String
        imagePath: String
        type: String
        description: String
    }

    type benefit {
        piece: Int
        description: String
    }

    type artifactSet {
        names: [String]
        imagePaths: [String]
        mainStats: String
        benefits: [benefit]
    }

    type member {
        name: String
        imgPath: String
        role: String
    }

    type team {
        name: String
        members: [member]
    }

    type Character {
        _id: ID!
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
        premiumWeapon: Weapon
        budgetWeapon: Weapon
        artifactSets: [artifactSet]
        teams: [team]
        comments: [Comment]
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
        allComments: [Comment]
        getCharacter(_id: String): [Character]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth

        addComment(id:ID, name: String!, body: String!, target: String!): Comment
    }
`

module.exports = typeDefs