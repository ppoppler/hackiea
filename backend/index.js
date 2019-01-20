const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();


mongoose.connect('mongodb+srv://admin:code2019@hackiea-vicfh.gcp.mongodb.net/Hackiea', {useNewUrlParser: true}).then(
    () => {console.log('Database is connected') },
    err => {console.log('Can not connect to the database' + err)}
);

// Buzzword model loaded
const buzz = mongoose.model('Buzzword', new mongoose.Schema({text:String}),'Buzzword');

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});

app.get('/',function(req,res){
    res.send('hello');
});


// Creating a api function to get all the database entries from buzzwords
router.get('/buzzwords', function(req,res){
    // Using find() to retrieve all of the entries from buzz and print to console.
    return buzz.find({},function(err,docs){
        //if there's no error
        if(!err){
            //print
            console.log(docs);
            process.exit();
        } else{ throw err; }
    }
)});



app.use('/api',router);