// Importing modules and dependencies
const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({helpers: require('./utils/helpers')});

// Importing express app & setting the PORT
const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

// Added session middleware with session object
app.use(session(sess));

// Import Express.js on the required template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//  Configure Express middleware: parse incoming JSON requests, handle URL-encoded form data, and serve static files from the 'public' directory.
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

// app.use(
//     session({
//         secret: process.env.SECRET,
//         store: new SequelizeStore({db: sequelize}),
//         resave: false,
//         saveUninitialized: false,
//     })
// );

app.use(routes);

// Sync Sequelize models with the database (if necessary), then start the Express server listening on the specified PORT.
sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log(`Now Listening on PORT ${PORT}`));
});