import User from "../models/User.js";

const addUser = async (req, res) => {
  try {
    const data = req.body;
  } catch (error) {
    console.log(error);
  }
};
const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

export { addUser, getAllUser };
