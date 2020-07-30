const UserController = require("../controllers/user.controller");

module.exports = (app) => {
  app.post("/api/users", UserController.newUser);
  app.get("/api/users", UserController.getGroup);
  app.get("/api/users/:id", UserController.getUser);
  app.delete("/api/users/:id", UserController.deleteUser);
};
