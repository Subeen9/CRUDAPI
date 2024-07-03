const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUser,
  addUsers,
  deleteUser,
  updateUser,
} = require("../Controller/user.controller");

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", addUsers);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

module.exports = router;
