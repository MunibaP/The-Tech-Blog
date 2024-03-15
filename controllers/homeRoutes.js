//Importing necessary packages and models
const router = require('express').Router();
const {Post, User, Comment} = require('../models');
const withAuth = require('../utils/auth');

// Route to GET homepage
router.get('/', async (req, res) => {
    try{
        const postData = await Post.findAll({
            include: [{model: User, attributes: ['username']}],
        });
        const posts = postData.map((post) => post.get({plain: true}));
        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route to GET single post
router.get('/post/:id', withAuth, async(req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {model: User, attributes:['username']},
                {
                    model: Comment,
                    include: [{model: User, attributes: ['username']}],
                },
            ],
        });
        const post = postData.get({plain: true});
        res.render('post', {
            ...post,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route to GET dashboard page with all the post by users
router.get('/dashboard', withAuth, async(req, res) => {
    try{
        const postData = await Post.findAll({
            where: {user_id: req.session.user_id},
            include: [{model: User, attributes: ['username']}],
        });
        
        const posts = postData.map((post) => post.get({plain: true}));

        res.render('dashboard', {
            posts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if(req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    if(req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('signup');
});

// Route to GET new post
router.get('/newpost', (req, res) => {
    if(req.session.logged_in) {
        res.render('newpost');
        return;
    }
    res.redirect('/login');
});

// Route to edit post
router.get('/editpost/:id', async(req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {model: User, attributes: ['username']},
                {
                    model, Comment,
                    include: [{model: User, attributes:['username']}],
                },
            ],
        });

        const post = postData.get({plain: true});

        res.render('editpost', {
            ...post,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;