const express = require('express');

module.exports = function(Model)
{
    const router = express.Router();
    const modelKey = Model.modelName.toLowerCase();
    const controller = require('./controller');
    const ctrl = controller(Model);

    router.get(`/${modelKey}/`, ctrl.getAll);
    router.get(`/${modelKey}/:id`, ctrl.getById);
    router.post(`/${modelKey}/`, ctrl.create);
    router.delete(`/${modelKey}/:id`, ctrl.delete);
    router.put(`/${modelKey}/:id`, ctrl.update);
    return router;
}