const PostModel = require('../models/post')

exports.createPost = (req, res) => {
    // ****
    // TODO: IMPLEMENT THIS AFTER YOU CREATED A CREATE POST PAGE IN THE CLIENT
    // {
    //      title: req.body.title,
    //      content: req.body.content,
    //      author: req.body.author,
    //      date: Date.now(),
    //      thumbnail: req.body.thumbnail
    // }
    // ****

    const Post = new PostModel({
        title: 'First Post Title',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam aperiam molestiae, libero aliquam suscipit recusandae cupiditate praesentium asperiores perferendis nobis, illum amet accusamus repudiandae aut possimus dicta? Ad, reprehenderit. Soluta!',
        author: 'Idan',
        date: Date.now(),
        thumbnail: 'http://clipart-library.com/images/pTq8yLqjc.png',
    })

    try {
        Post.save().then((data) => {
            res.json({
                ok: true,
                data: data,
            })
        })
    } catch (err) {
        res.status(400).json({
            ok: false,
            data: err,
        })
    }
}

exports.getPostById = async (req, res) => {
    try {
        const post = await PostModel.findById(req.params.id)
        if (!post) {
            res.status(404).json({ ok: false, data: 'NOT_FOUND' })
        }
        res.status(200).json({ ok: true, data: post })
    } catch (err) {
        res.status(404).json({ ok: false, data: 'SERVER_ERROR' })
    }
}

exports.editPost = (req, res) => {
    PostModel.findByIdAndUpdate(req.params.id, { ...req.body })
        .then((data) => res.status(200).send({ ok: true, data: data }))
        .catch((err) => res.status(404).send({ ok: false, data: err }))
}

exports.deletePost = (req, res) => {
    PostModel.findByIdAndDelete(req.params.id)
        .then((data) => res.status(200).send({ ok: true, data: data }))
        .catch((err) => res.status(404).send({ ok: false, data: err }))
}

exports.getPosts = (req, res) => {
    PostModel.find()
        .then((Posts) => res.status(200).send({ ok: true, data: Posts }))
        .catch((err) => res.status(404).send({ ok: false, data: err }))
}
