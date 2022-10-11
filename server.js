const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});

const app = express();
const PORT = 3000;

app.engine('handlebars',hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('main', {layout: 'index'});
});

app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
});