// router.get(`/${modelKey}/`, ctrl.getAll);
// router.get(`/${modelKey}/:id`, ctrl.getById);
// router.post(`/${modelKey}/`, ctrl.create);
// router.delete(`/${modelKey}/:id`, ctrl.delete);
// router.put(`/${modelKey}/:id`, ctrl.update);

function handleError(res, err)
{
    console.log('Error in the controller: ', err);
    return res.status(400).send({err});
}

module.exports = function(Model)
{
    return{
        create: (req, res, next) =>
        {
            Model.create(req.body, function(err, data)
            {
                if(err)
                {
                    handleError(res, err);
                    return
                }
                res.json({ message: `${Model.modelName} created successfully`, data, });
            })
        },
        update: (req, res, next) =>
        {
            const query = {_id: req.params.id};
            Model.update(query, req.body, function(err, data)
            {
                if(err) {
                    handleError(res, err);
                    return;
                }
                res.json({ message: `${Model.modelName} updated successfully.`, data, });
            })
        },
        delete: (req, res, next) =>
        {
            const query = {_id: req.params.id};
            Model.delete(query, function(err, data)
            {
                if(err)
                {
                    handleError(res, err);
                }
                res.json({ message: `${Model.modelName} deleted successsfully`, data, });
            })
        },
        getAll: (req, res, next) =>
        {
            const query = {};
            Model.get(query, (err, data) =>
            {
                if(err) {
                    handleError(res, err);
                    return;
                }
                res.json(data);
            })
        },
        getById: (req, res, next) =>
        {
            const query = { _id: req.params.id };
            Model.get(query, (err, data) =>
            {
                if(err) {
                    handleError(res, err);
                    return;
                }
                res.json(data);
            })
        }
    }
}