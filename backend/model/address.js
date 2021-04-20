const mongoose=require('mongoose');

const AddressSchema= new mongoose.Schema({
    street_adress:String,
    subdivision:String,
    postal_code:String,
    locality:String,
    country:String,
});
const Address= mongoose.model('Address',AddressSchema)
module.exports=Address;