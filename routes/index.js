var express = require('express');
var router = express.Router();




router.get('/', function(req, res, next) {
    const data = {
            title: 'Me',
            body: 'Hej! Jag heter Witold. Jag tror jag kör på REACT men är fortf. inte helt säker. Jag hoppas på att jag ska klara av denna kurs och att det blir kul och intressant :)'
    };

    res.json(data);
});

module.exports = router;
