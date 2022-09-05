const { AuthenticationError } = require('apollo-server-express')
const {Character, User, Comment} = require('../models')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        allCharacters: async () => {
            return await Character.find().sort({name: 1}).populate('comments')
        },

        allComments: async () => {
            return await Comment.find().sort({_id:-1}).limit(3)
        }
    },

    Mutation: {
        addUser: async (parent, {username, email, password}) => {
            const user = await (await User.create({username, email, password}))
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

        addComment: async (parent, {id, name, body, target}) => {
            const commentData = await Comment.create({name,body,target})
            await Character.findOneAndUpdate(
                {_id: id},
                {$push: {comments: commentData._id}},
                {new: true}
            )
            return commentData
        }
    }
}

module.exports = resolvers