const express = require('express');
const routes = express.Router();
const profile = require('../Controllers/Profile');

routes.get('/', profile.getProfiles);

routes.get('/:id', profile.getProfileByID);

module.exports = routes; 