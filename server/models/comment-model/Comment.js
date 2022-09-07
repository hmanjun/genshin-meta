const {Schema, model} = require('mongoose')

const commentSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        body: String,
        target: String,
        reports: {
            type: Number,
            default: 0
        }
    }
)

const Comment = model('comment', commentSchema)

module.exports = Comment