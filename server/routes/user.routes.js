const UserController = require("../controllers/user.controller");

module.exports = (app) => {
  app.post("/users", UserController.newUser);
  app.get("/users", UserController.getGroup);
  app.get("/users/:id", UserController.getUser);
  app.delete("/users/:id", UserController.deleteUser);
};
