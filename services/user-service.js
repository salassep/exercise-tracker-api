import User from "../models/user-model.js";

export const createUser = async (username) => {
  const newUser = new User({
    username,
  });

  try {
    const response = await newUser.save();
    return response;
  } catch (error) {
    return false;
  }

};
