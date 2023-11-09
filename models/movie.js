const mongoose = require("mongoose")
const movieSchema = mongoose.Schema({
movieName: String,
movieReleasedDate: Number,
moviePrice: Number
})
module.exports = mongoose.model("movie",movieSchema)