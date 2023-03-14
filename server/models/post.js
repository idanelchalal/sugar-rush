// const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

const Post = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true, minLength: 30 },
    author: { type: String, required: true },
    date: { type: Date, default: Date.now },
    thumbnail: { type: String, default: '' },
    comments: [{ body: String, date: Date }],
})

const PostModel = mongoose.model('Post', Post)

module.exports = PostModel
