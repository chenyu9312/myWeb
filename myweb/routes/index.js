var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Portfolio' });
});
/*Get about page*/
router.get('/about', function (req, res, next) {
    res.render('index', { title: 'About Me' });
});

/* GET contact page. */
router.get('/contact', function (req, res, next) {
    res.render('contact', { title: 'Contact Me' });
});

/* GET project page. */
router.get('/project', function (req, res, next) {
    res.render('index', { title: 'Projects' });
});

/* GET service page. */
router.get('/service', function (req, res, next) {
    res.render('index', { title: 'Services' });
});
module.exports = router;
