var movie = require('../models/movie');
// List of all Costumes
exports.movie_list = async function(req, res) {
    try{
        themovies = await movie.find();
        res.send(themovies);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
};
// for a specific Costume.
exports.movie_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.movie_create_post = async function(req, res) {
    console.log(req.body)
    let document = new movie();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.movieName = req.movieName;
    document.movieRelasedDate = req.body.movieRelasedDate;
    document.moviePrice = req.body.moviePrice;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } ;
};
// Handle Costume delete form on DELETE.
exports.movie_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.movie_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id);
};
 
// VIEWS
// Handle a show all view
exports.movie_view_all_Page = async function(req, res) {
    try{
    console.log("IN")
    theGadgets = await movie.find();
    console.log(themovies)
    res.render('movies', { title: 'Search Results - movies', results: themovies });
    }
    catch(err){
    //res.status(500);
    res.send(`{"error": ${err}}`);
    }
}