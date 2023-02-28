const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const mongodb = require('./Config/mongoConfig');
const apiRoutes = require('./Routes/routes.js');

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

mongoose.set('strictQuery', false);
const db = mongoose.connect(mongodb.url)
db.then(() => console.log("DB Connected successfully"))
.catch(error => console.log("Failed to connect with DB",error),3000)

// const { MongoClient } = require('mongodb')
// const client = new MongoClient('mongodb://127.0.0.1:27017')
// client.connect()
    // .then(() => {
    //     console.log('Connected Successfully!') 
    //     //Close the database connection  
    //     // console.log('Exiting..')
    //     setTimeout(() =>{console.log('Existing!')},3000)
    //     db.close()
    // })
    // .catch(error => console.log('Failed to connect!', error));

    var port = process.env.PORT || 2020
    app.listen(port,() => {console.log("App listening on port",port)});

    app.get("/", (req,res) => res.send ("Welcome to Saving API"));

    app.use("/saving",apiRoutes);
    

    module.exports = app ;