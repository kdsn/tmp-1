var express = require('express');
const {smsAfsender} = require("../modul");
var router = express.Router();

/* Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Forside - eksamens opgave' });
});

/* Form router */
router.get('/sporing', function(req, res, next) {
  /* Read Cookie */
  res.render('sporing', { title: 'sporing - eksamens opgave'});
});
router.post('/sporing', function(req, res, next) {
  const {cookie} =  req;

  smsAfsender("Du bedes ringe til 3232 0511", cookie.infectedPhone);
  /* Cookie sættes */
  res.render('sporing', { title: 'sporing - eksamens opgave' });
});


/* API router */
router.get('/kontakter', function(req, res, next) {
  let reqData = {};

  reqData = JSON.stringify(reqData, null, 4);

  res.status(200).send(`Operation gennemført<br>${reqData}`);
});
router.post('/kontakter', function(req, res, next) {
  res.status(200).send('Operation gennemført');
});
router.put('/kontakter', function(req, res, next) {
  res.status(200).send('Operation gennemført');
});
router.delete('/kontakter', function(req, res, next) {
  res.status(200).send('Operation gennemført');
});


module.exports = router;
