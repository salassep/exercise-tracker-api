import User from "../models/user-model.js";
import Exercise from "../models/exercise-model.js";

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

export const findUserById = async (id) => {
  try {
    const user = await User.findById(id);

    if (!user) {
      return false;
    }

    return user;

  } catch (error) {
    return false;
  }

}

export const getAllUsers = async () => {
  const users = await User.find()
    .select("username");
  return users;
}

export const createUserExercise = async (data) => {
  const newExercise = new Exercise({
    userId: data._id,
    description: data.description,
    duration: data.duration,
    date: data.date,
  });

  try {
    const response = await newExercise.save();
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getUserExerciseLogs = async(data) => {
  try {
    const exercises = await Exercise.find({
      userId: data._id,
      date: {
        $gte: new Date(data.from),
        $lt: new Date(data.to),
      },
    }).select("description duration date -_id")
      .limit(data.limit);
  
    return exercises;
  } catch (error) {
    return false;
  }
};
