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

app.use(session(sess));

app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(
    session({
        secret: process.env.SECRET,
        store: new SequelizeStore({db: sequelize}),
        resave: false,
        saveUninitialized: false,
    })
);

app.use(routes);
sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log(`Now Listening on PORT ${PORT}`));
});