const Pet = require('../models/Pet');
const router = module.exports = require('express').Router();

router
    .post('/', (req, res, next) => {
        return new Pet(req.body)
            .save()
            .then(mongoRes => res.send(mongoRes))
            .catch(next);
    })
;
