const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/new', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        console.log(newPost)
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
})


module.exports = router;