const express = require('express');
const date = require(__dirname + '/date.js');

const app = express();
let items = [];
let workItems = [];

app.set('view engine', 'ejs'); // view engine setup

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); //setup public folder

app.get('/', (req, res) => {
  let day = date.getDate();

  res.render('list', { listTitle: day, newListItem: items }); //need to add all render items
});

app.post('/', (req, res) => {
  let item = req.body.newListItem;

  if (req.body.list === 'work') {
    workItems.push(item);
    res.redirect('/work');
  } else {
    items.push(item);
    res.redirect('/'); // when item generated, go to homepage
  }
});

app.get('/work', (req, res) => {
  //another route
  res.render('List', { listTitle: 'Work List', newListItem: workItems });
});
app.post('/work', (req, res) => {
  res.redirect('/work');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
