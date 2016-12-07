var express = require('express');
var crypto = require('crypto');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var jwt = require('express-jwt');
var router = express.Router();

var mongoose = require('mongoose');
var user = require('../models/user.js');

var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
