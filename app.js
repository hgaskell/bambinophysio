var express    = require("express");
var app        = express();
var bodyParser = require("body-parser");
var mongoose   = require("mongoose");

//MONGOOSE CONNECTION
mongoose.connect("mongodb+srv://hgaskell:C1ty0142.@cluster0-nmbe7.mongodb.net/bambinophysio?retryWrites=true", {
	useNewUrlParser: true,
	useCreateIndex: true
}).then(() => {
	console.log("Connected to DB!");
}).catch(err => {
	console.log("ERROR:", err.message);
});

//SCHEMA SETUP
var blogOneSchema = new mongoose.Schema({
	author: String,
	text: String,
});
var indexSchema = new mongoose.Schema({
	author: String,
	text: String,
});

var blogOne = mongoose.model("blogOne", blogOneSchema);
var Index = mongoose.model("index", indexSchema);

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/index", function(req, res){
	Index.find({}, function(err, comments){
		if(err){
			console.log(err);
		} else {
			res.render("index", {comments:comments});
		}
	});
});

app.post("/index", function(req, res){
	Index.create(req.body.comment, function(err, comments){
		if(err){
			console.log(err);
		} else {
			res.redirect("/index");
		}
	});
});

app.get("/index/comment", function(req, res){
	res.render("indexNew");
});

app.get("/blogpost", function(req, res){
	blogOne.find({}, function(err, comments){
		if(err){
			console.log(err);
		} else {
			res.render("blogpost", {comments:comments});
		}
	});
});

app.post("/blogpost", function(req, res){
	blogOne.create(req.body.comment, function(err, comments){
		if(err){
			console.log(err);
		} else {
			res.redirect("/blogpost");
		}
	});
});

app.get("/blogpost/blogOne", function(req, res){
	res.render("blogOneNew");
});



app.listen(3000, function(){
	console.log("SEVER HAS STARTED");
});