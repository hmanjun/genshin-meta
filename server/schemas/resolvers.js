const { AuthenticationError } = require('apollo-server-express')
const {Character, User} = require('../models')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        allCharacters: async () => {
            return await Character.find().sort({name: 1})
        }
    },

    Mutation: {
        addUser: async (parent, {username, email, password}) => {
            const user = await User.create({username, email, password})
            const token = signToken(user)

            return {token, user}
        },

        login: async (parent, {email, password}) => {
            const user = await User.findOne({email})
            if(!user) throw new AuthenticationError('No user found with this email found!')

            const correctPass = await user.isCorrectPassword(password)
            if(!correctPass) throw new AuthenticationError('Incorrect password!')

            const token = signToken(user)
            return {token, user}

        },

        addCharacter: async (parent, {name, updatedAt, description, element, weapon, nation, rarity, skillTalents, passiveTalents, constellations}) => {
            return await Character.create({name, updatedAt, description, element, weapon, nation, rarity, skillTalents, passiveTalents, constellations})
        }
    }
}

module.exports = resolvers