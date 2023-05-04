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

export const createUserExercise = async (req, res) => {
  const { _id } = req.params;
  const { description, duration, date } = req.body;

  const user = await userService.findUserById(_id);

  if (!user) {
    return res.status(404).json({
      success: false
    });
  }

  const exercise = await userService.createUserExercise({ _id, description, duration, date});

  if (!exercise) {
    return res.status(400).json({
      success: false,
    });
  }

  res.json({
    success: true,
    _id: user._id,
    username: user.username,
    description: exercise.description,
    duration: exercise.duration,
    date: exercise.date,
  });
};

export const getUserExerciseLogs = (req, res) => {
  console.log("hello create user exercise logs");
};
