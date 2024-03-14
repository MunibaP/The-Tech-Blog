const {Post} = require('../models');

const postData = [
    {
        title: 'My first blog post',
        content: 'My first blog post on my tech blog.',
        user_id: '1',
    },
    {
        title: 'My second blog post',
        content: 'My second blog post on my tech blog.',
        user_id: '2',
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;