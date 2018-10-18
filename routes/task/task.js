const router = require("express").Router();
const taskController = require("../../controllers/taskController");

// Matches with "/api/task"
router.route("/")
  .get(taskController.getAllTasks)
  .post(taskController.postTask);

// Matches with "/api/task/:id"
router.route("/:id")
  .get(taskController.findById)
  .delete(taskController.deleteTask);

module.exports = router;