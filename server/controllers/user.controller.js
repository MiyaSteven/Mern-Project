// contains the functions that will be executed when the corresponding route URL is visited
const User = require("../models/user.model");

module.exports = {
  newUser: function (req, res) {
    User.create(req.body)
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
    console.log("Added User to User Database");
  },

  getGroup(req, res) {
    User.find()
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  getUser(req, res) {
    User.findById({ _id: req.params.id })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  deleteUser(req, res) {
    User.findByIdAndDelete(req.params.id)
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
