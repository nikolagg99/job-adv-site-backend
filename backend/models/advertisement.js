const mongoose = require('mongoose');

const advertisementSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Enter advertisement name'],
        trim: true,
        maxlength: [50, 'Advertisement name cannot exceed 50 characters']
    },
    content: {
        type: String,
        required: [true, 'Enter content of the advertisement'],
        trim: true,
        maxlength: [1000, 'Advertisement content cannot exceed 500 characters']
    },
    likes: {
        type: Number,
        required: [true],
        trim: true,
        default: 0
    },
    type: {
        type: String,
        required: [true, 'Enter type']
    },
    category: {
        type: String,
        required: [true, 'Enter category']
    },
    company_name: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('Advertisement', advertisementSchema)