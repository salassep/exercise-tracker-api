import * as userService from '../services/user-service.js';

export const createUser = async (req, res) => {
  const username = req.body.username;
  const user = await userService.createUser(username);

  if (!user) {
    return res.status(400).json({
      success: false,
    });
  }

  res.json({
    success: true,
    _id: user._id,
    username: user.username,
  });
};

export const createUserExercise = (req, res) => {
  console.log("hello create user exercise");

};

export const getUserExerciseLogs = (req, res) => {
  console.log("hello create user exercise logs");
};
