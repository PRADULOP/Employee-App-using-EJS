const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();
const port = 4001;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');


app.use('/', router);


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
