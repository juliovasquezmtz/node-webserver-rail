const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

const params = {
  title: 'My proyect Node',
  name: 'Julio Vásquez M.',
  display: 'block',
}

// Handlebar
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Server static content 
app.use( express.static('public'));

app.get('/', (req, res) => {
  // Render hbs
  res.render('home', {
    title: 'My proyect Node',
    name: 'Julio Vásquez M.',
    display: 'none',
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', params)
});

app.get('/elements', (req, res) => {
  res.render('elements', params)
});

app.get('*', (req, res) => {
  res.render('404', params)
});

app.listen(port)