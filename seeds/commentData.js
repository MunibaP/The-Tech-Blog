const {Comment} = require('../models');

const commentData = [
    {
        comment_description: 'Finally!! my Test blog starts working',
        user_id: 1,
        post_id: 1,
    },
    {
        comment_description: 'My tech blog starts working',
        user_id: 2,
        post_id: 1,
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;