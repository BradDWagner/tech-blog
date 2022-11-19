const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) =>{
    try{
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                }
            ]
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});//TODO: add withAuth
router.get('/post/:id', async (req, res) => {
    try {
        console.log('reached endpoint')
        const postData = await Post.findByPk(req.params.id,{
            include: [
                {
                    model: User,
                    attributes: ['name'],
                }, 
            ],
        });


        const commentData = await Comment.findAll({
            where: {
                post_id: req.params.id
            },
            include: [
                {
                    model: User,
                    attributes: ['name'],
                }, 
            ],
        });

        // console.log(commentData)
    
        const post = postData.get({ plain: true});
        const comments = commentData.map((comment) => comment.get({ plain: true }));
        console.log(post)
        console.log(comments)

    
        res.render('post', {
            post,
            comments,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }

})

module.exports = router;