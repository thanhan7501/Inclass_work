const express = require('express');
const app = express();
const path = require('path');

const engines = require('consolidate')
app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

const fs = require('fs');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/doRegister', (req, res) => {
    let name = req.body.name;
    let date = req.body.eventdate;

    if (name.length <= 3)
        errorNameMessage = "name length must > 3";
    if (date.length <= 0)
        errorDateMessage = "date invalid";
    if (errorNameMessage != null || errorDateMessage != null) {
        let errorData = { name: errorNameMessage, date: errorDateMessage };
        res.render('index', { error: errorData })
        return;
    }

    //redirect user to Index
    res.redirect('/');
})


var PORT = process.env.Port || 8000
app.listen(PORT);
console.debug("Server is running on port: " + PORT);