var movie = require('../models/movie');
// List of all movies
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
// for a specific movie.
// for a specific movie.
exports.movie_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await movie.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
// Handle movie create on POST.
exports.movie_create_post = async function(req, res) {
    console.log(req.body)
    let document = new movie();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"movie_type":"goat", "cost":12, "size":"large"}
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
// Handle movie delete form on DELETE.
exports.movie_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await movie.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
// Handle movie update form on PUT.

 
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


// Handle movie update form on PUT.
exports.movie_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await movie.findById( req.params.id)
// Do updates of properties
if(req.body.movieName)
toUpdate.movieName = req.body.movieName;
if(req.body.movieRelasedDate) toUpdate.movieRelasedDate = req.body.movieRelasedDate;
if(req.body.moviePrice) toUpdate.moviePrice = req.body.moviePrice;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};