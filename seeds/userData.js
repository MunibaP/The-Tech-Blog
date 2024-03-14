// Importing Models
const {User} = require('../models');

const userData = [
    {
        username: 'user1',
        email: 'user1@example.com',
        password: 'password123',
    },
    {
        username: 'test123',
        email: 'test123@example.com',
        password: '123password',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;