var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var classifield = require('../models/classifield.js');

/* GET /classifields */
router.get('/', function(req, res, next) {
  classifield.find(function (err, classifields) {
    if (err) return next(err);
    res.json(classifields);
  });
});

/* POST /classifields */
router.post('/', function(req, res, next) {
  classifield.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /classifields/id */
router.get('/:id', function(req, res, next) {
  classifield.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /classifields/:id */
router.put('/:id', function(req, res, next) {
  classifield.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /classifields/:id */
router.delete('/:id', function(req, res, next) {
  classifield.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
