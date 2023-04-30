const con = require('../../db-config');
const queries = require('../queries/ideas.queries');

/**
 * CRUD - Create, Read, Update, Delete
 * GET - Read
 * POST - Create
 * PUT - Update
 * DELETE - Delete
 */

exports.getAllIdeas = function(req, res) {
  con.query(queries.ALL_IDEAS, function(err, result, fields) {
    if (err) {
      res.send(err);
    }
    res.json(result);
  });
};

// http://localhost:3000/ideas/1
exports.getIdea = function(req, res) {
  con.query(queries.SINGLE_IDEAS, [req.params.ideaId], function(err, result) {
    if (err) {
      res.send(err);
    }
    res.json(result);
  });
};

// http://localhost:3000/ideas/1
/**
 * POST request -
 * {
 *  name: 'A idea name'
 * }
 */
exports.createIdea = function(req, res) {
  con.query(queries.INSERT_IDEAS, [req.body.name, req.body.status, req.body.entry], function(err, result) {
    if (err) {
      res.send(err);
    }
    console.log(result);
    res.json({ message: 'Number of records inserted: ' + result.affectedRows });
  });
};

// http://localhost:3000/ideas/1
/**
 * PUT request -
 * {
 *  name: 'An idea name',
 *  state: 'completed'
 * }
 */
exports.updateIdea = function(req, res) {
  con.query(
    queries.UPDATE_IDEA,
    [req.body.name, req.body.status, req.body.entry, req.params.ideaId],
    function(err, data) {
      if (err) {
        res.send(err);
      }
      res.json(data);
    }
  );
};

// http://localhost:3000/ideas/1
exports.deleteIdea = function(req, res) {
  con.query(queries.DELETE_IDEA, [req.params.ideaId], function(err) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Deleted successfully.' });
  });
};
