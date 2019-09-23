// IMPORT MONGOOSE
const mongoose = require('./connection.js')

// CREATE SCHEMEA
const UserSchema = new mongoose.Schema({
  userName: String,
})

// CREATE COLLECTION API
const userCollection = mongoose.model('User', UserSchema)

// FUNCTIONS

// GET/ read
const getAllUsers = (userName, activity_id) => {
  userName.activity_id = activity_id
  return userCollection.find({_id: activity_id});
}

// GET/ read
const getOneUser = (user_id) => {
  return userCollection.findById(user_id)
}

// CREATE/ post
const addUser = (userName, activity_id) => {
  userName.activity_id = activity_id
  return userCollection.create(userName)
}

// UPDATE/ edit
const updateUser = (user_id, updatedUser) => {
  return userCollection.updateOne({_id: user_id}, updatedUser)
}

// DELETE
const deleteUser = (user_id) => {
  return userCollection.findByIdAndDelete(user_id)
}

// EXPORT ALL FUNCTIONS
module.exports = {
  addUser,
  deleteUser,
  getAllUsers,
  getOneUser,
  updateUser
}
