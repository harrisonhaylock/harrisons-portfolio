const mongoose = require('mongoose'); 

const inquirySchema = new mongoose.Schema({
    FirstName: String,  
    LastName: String, 
    email: String, 
    message: String, 
    date: {
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Inquiry', inquirySchema); 
