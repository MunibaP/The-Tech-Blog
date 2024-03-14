const {Comment} = require('../models');

const commentData = [
    {
        comment_description: 'My first blog post',
        user_id: 1,
        post_id: 1,
    },
    {
        comment_description: 'My second blog post',
        user_id: 2,
        post_id: 1,
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;