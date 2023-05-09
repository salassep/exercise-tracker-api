import * as userService from '../services/user-service.js';
import moment from 'moment/moment.js';

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

  if (date && !moment(date, "YYYY-MM-DD", true).isValid()) {
    return res.status(400).json({
      success: false,
    });
  }

  const user = await userService.findUserById(_id);

  if (!user) {
    return res.status(404).json({
      success: false
    });
  }

  const exercise = await userService.createUserExercise({ _id, description, duration, date });

  if (!exercise) {
    return res.status(400).json({
      success: false,
    });
  }

  res.json({
    _id,
    username: user.username,
    description: description,
    duration: exercise.duration,
    date: moment(exercise.date).format('ddd MMM DD YYYY'),
  });
};

export const getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.send(users);
}

export const getUserExerciseLogs = async (req, res) => {
  const { _id } = req.params;
  const { from, to, limit } = req.query;

  const user = await userService.findUserById(_id);

  if (!user) {
    return res.status(404).json({
      success: false
    });
  }

  const exercises = await userService.getUserExerciseLogs({ _id, from, to, limit });

  if (!exercises) {
    return res.status(400).json({
      success: false
    });
  }

  const formattedExercises = exercises.map(exercise => {
    return {
      description: exercise.description,
      duration: exercise.duration,
      date: moment(exercise.date).format('ddd MMM DD YYYY'),
    }
  });

  res.json({
    _id,
    username: user.username,
    count: exercises.length,
    log: formattedExercises,
  });
};
