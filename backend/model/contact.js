const mongoose = require('mongoose');
const Address = require('./address');


const ContactSchema= new mongoose.Schema({
    type:String,
    address:Address,
    email:String,
    mobile_phone_number:String,
});
const Contact= mongoose.model('Contact',ContactSchema)
module.exports=Contact;
module.exports=Address;