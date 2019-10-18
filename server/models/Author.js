const mongoose = require('mongoose');

let authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Author must have a name 3 characters or longer!"],
        minlength: [3, "Author must have a name 3 characters or longer!"],
        unique: [true, "This author already in your list"]
    },
}, { timestamps: true });


mongoose.model('Author', authorSchema);