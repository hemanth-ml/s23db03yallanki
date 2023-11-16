var express = require('express');
const movie_controlers= require('../controllers/movie1');
var router = express.Router();

/* GET home page. */
/* GET delete movie page */
router.get('/delete', movie_controlers.movie_delete_Page);


/* GET create update page */
router.get('/update', movie_controlers.movie_update_Page);

/* GET create movie page */
router.get('/create', movie_controlers.movie_create_Page);
/* GET detail movie page */
router.get('/detail', movie_controlers.movie_view_one_Page);
module.exports = router;