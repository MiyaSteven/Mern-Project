const UserController = require("../controllers/user.controller");
const User = require("../models/user.model");

module.exports = (app) => {
  app.post("/api/users", UserController.newUser);
  app.get("/api/users", UserController.getGroup);
  app.get("/api/users/:id", UserController.getUser);
  app.put("/api/users/:id", UserController.updateUser);
  app.delete("/api/users/:id", UserController.deleteUser);
};
