const mongoose = require('mongoose');
const conceptSchema = require('./concept.model');

conceptSchema.statics = {
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
const conceptModel = mongoose.model('concepts', conceptSchema);
module.exports = conceptModel;