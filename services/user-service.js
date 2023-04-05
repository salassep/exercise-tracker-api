import db from "../config/db.js";

export const createUser = async (username) => {
  const collection = db.collection("users");
  const result = await collection.insertOne({
    username,
  });

  return result;
};
