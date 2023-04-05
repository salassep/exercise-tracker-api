import * as userService from '../services/user-service.js';

export const createUser = async (req, res) => {
  const username = req.body.username;
  await userService.createUser(username);
};

export const createUserExercise = (req, res) => {
  console.log("hello create user exercise");

};

export const getUserExerciseLogs = (req, res) => {
  console.log("hello create user exercise logs");
};
