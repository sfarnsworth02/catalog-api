const mongoose = require('mongoose');
const noteSchema = require('./note.model');

noteSchema.statics = {
    create: function(data, callback)
    {
        const document = new this(data);
        document.save(callback);
    },
    get: function(query, callback)
    {
        this.find(query, callback);
    },
    update: function(query, data, callback)
    {
        this.findOneAndUpdate(query, {$set: data}, {new: true}, callback);
    },
    delete: function(query, callback)
    {
        this.findOneAndDelete(query, callback);
    },
}

const noteModel = mongoose.model('notes', noteSchema);
module.exports = noteModel;
