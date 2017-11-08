var db = require("../models");
var path = require('path');

module.exports = function(app) {

  app.get("/users", function(req, res) {
    db.users.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.get("/bends", function(req, res) {
    db.bends.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.get("/interested", function(req, res) {
    db.interested_in_statuses.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.get("/safety", function(req, res) {
    db.safety_statuses.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.get("/status", function(req, res) {
    db.status_statuses.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.get("/spend", function(req, res) {
    db.spend_statuses.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.get("/users/:id", function(req, res) {
    db.users.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

    app.get("/bends/:id", function(req, res) {
    db.bends.findOne({
      where: {
        userId: req.params.id,
        current_bend: true
      }
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.post("/logon", function(req, res) {
    db.users.findOne({
      where: {
        user_name: req.body.Email,
        password: req.body.Password
      }
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.post("/user", function(req, res) {
    db.users.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });

};