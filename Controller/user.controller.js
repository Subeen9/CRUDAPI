const model = require("../models/user.model");
const getUsers = async (req, res) => {
  try {
    const user = await model.find({});
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json(e.message);
  }
};
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await model.findById(id);
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await model.findByIdAndUpdate(id, req.body);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    const updatedUser = await model.findById(id);
    res.status(200).json(updatedUser);
  } catch (e) {
    res.status(500).json({ message: error.message });
  }
};
const addUsers = async (req, res) => {
  try {
    const user = await model.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await model.findByIdAndDelete(id);
    if (!user) {
      res.status(500).json({ message: "user not found" });
    }
    res.status(200).json("Deleted Successfully");
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
module.exports = { getUsers, getUser, deleteUser, addUsers, updateUser };
