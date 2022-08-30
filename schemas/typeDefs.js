const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type Character {
        name: String!
        updatedAt: String!
        description: String
        element: String
        weapon: String
        nation: String
        rarity: String
        skillTalents: [skillTalent]
        passiveTalents: [passiveTalent]
        constellations: [constellation]
    }
`

module.exports = typeDefs