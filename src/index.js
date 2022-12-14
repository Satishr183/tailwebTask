const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const route = require('./routes/route.js');


const app = express()

app.use(express.json())


mongoose.connect("mongodb+srv://Satishr183:6SdvyY7phCfH5VsV@cluster0.ewmx8.mongodb.net/Tailwebs_DB", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )



app.use('/', route);

app.listen(3000, function () {
    console.log('Express app running on port ' +3000)
});