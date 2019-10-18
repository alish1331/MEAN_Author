let mongoose = require('mongoose');
let Author = mongoose.model('Author');

module.exports = {
    index: (req, res) => {
        Author.find()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    create: (req, res) => {
        Author.create(req.body)
            .then(data => res.json({ message: 'success', data: data }))
            .catch(err => res.json({ message: 'fail', err: err }))
    },
    findById: (req, res) => {
        Author.findOne({ _id: req.params._id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    update: (req, res) => {
        Author.findOneAndUpdate({ _id: req.params._id }, req.body, { runValidators: true, new: false })
            .then(data => res.json({ message: 'success', data: data }))
            .catch(err => res.json({ message: 'fail', err: err }))
    },
    delete: (req, res) => {
        Author.remove({ _id: req.params._id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}