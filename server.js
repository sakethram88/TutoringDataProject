const express= require ("express");
const app = express();
const mongoose = require ("mongoose");
const bodyParser= require ("body-parser");
const path = require('path');
app.use(bodyParser.urlencoded({extended:true}));


mongoose.connect("mongodb+srv://josyabhatlas1:saketh12388@tutoringregistration.uoed4.mongodb.net/")

const dbschema ={
    fullName : String,
    course: String,
    emailid: String,
    TAname: String,
    date: String
}

const TutoringVisits = mongoose.model("TutoringVisits", dbschema);


app.get("/", function(req,res) {
    res.sendFile(__dirname+ "/index.html");

})


app.use(express.static(path.join(__dirname, 'public')))

app.post("/thankyou.html", function (req,res){
    let newNote= new TutoringVisits({
    fullName: req.body.fullName,
    course: req.body.course,
    emailid: req.body.emailid,
    TAname: req.body.TAname,
    date: req.body.date,

});
newNote.save();
res.redirect("/thankyou.html");
})



app.get("/thankyou.html", function(req,res) {
    res.sendFile(__dirname+ "/thankyou.html");
})


app.listen(3000, function() {
    console.log("server is running on 3000");
})
