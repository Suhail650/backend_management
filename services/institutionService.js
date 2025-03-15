const mongoose = require("mongoose");
const { ObjectId } = require("mongoose").Types;

const connectdb = async () => {
  // if (mongoose.connection.readyState !== 1) {
  //   throw new Error("Database connection is not ready");
  // }

  const db = mongoose.connection.db;
  return db.collection("institutions");
};

const getAllInstitutions = async () => {
  try {
    const institutionCollection = await connectdb();
    const institution = await institutionCollection.find({}).toArray();
    return institution;
  } catch (error) {
    return `message: ${error}`;
  }
};

const getInstitutionById = async (id) => {
  try {
    const institutionCollection = await connectdb();
    const institution = await institutionCollection.findOne({
      _id: new ObjectId(id),
    });

    if (!institution) {
      return { message: "Institution not found" };
    }

    return institution;
  } catch (error) {
    return { message: error.message };
  }
};

module.exports = { getAllInstitutions, getInstitutionById };
