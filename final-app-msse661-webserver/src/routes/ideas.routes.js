const controllers = require('../controllers/ideas.controller');
const express = require('express');

const ideasRoutes = express.Router();
/**
 * Express routes for Ideas.
 *
 * RESTful endpoints make for easily adding to existing API features.
 */

/**
 * Routes for all ideas. Evaluates to `/ideas/`.
 */
ideasRoutes.get('/', controllers.getAllIdeas).post('/', controllers.createIdea);

/**
 * Routes for a idea by id. Evalutes to `/ideas/:ideaId`.
 */
ideasRoutes
  .get('/:ideaId', controllers.getIdea) // GET http://locahost:3000/ideas/1
  .put('/:ideaId', controllers.updateIdea)
  .delete('/:ideaId', controllers.deleteIdea);

module.exports = ideasRoutes;
