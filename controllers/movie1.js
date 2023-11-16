var movie = require('../models/movie');
// List of all movies

// Handle a show one view with id specified by query
exports.movie_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await movie.findById( req.query.id)
    res.render('moviedetail',
    { title: 'movie Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a movie.
// No body, no in path parameter, no query.
// Does not need to be async
exports.movie_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('moviecreate', { title: 'movie Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for updating a movie.
// query provides the id
exports.movie_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await movie.findById(req.query.id)
    res.render('movieupdate', { title: 'movie Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle a delete one view with id from query
exports.movie_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await movie.findById(req.query.id)
    res.render('moviedelete', { title: 'movie Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
