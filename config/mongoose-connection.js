// const mongoose=require("mongoose");
// const dbgr=require("debug")("devlopment : mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/Ecorm-Cart").then(function (){
//     console.log("connected");
// }).catch((err)=>{
//     console.log(err);
// })


// module.exports=mongoose.connection;


const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EcomCart', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
