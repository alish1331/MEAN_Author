const authors = require('./../controllers/authors');

module.exports = (app) => {

    app.get('/api/authors', authors.index);
    app.post('/api/authors', authors.create);
    app.get('/api/author/:_id', authors.findById);
    app.put('/api/edit/:_id', authors.update);
    app.delete('/api/authors/:_id', authors.delete);
};