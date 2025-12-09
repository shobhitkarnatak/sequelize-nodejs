const { CourseModel } = require("./model/courseModel");
const { PostModel } = require("./model/postModel");
const { ProfileModel } = require("./model/profileModel");
const { StudentModel } = require("./model/studentModel");
const { UserModel } = require("./model/userModel");

// One to One Association
UserModel.hasOne(ProfileModel, {
  foreignKey: "userId",
  as: "profile",
});

ProfileModel.belongsTo(UserModel, {
  foreignKey: "userId",
  as: "user info",
});

// One to Many Association
UserModel.hasMany(PostModel, {
  foreignKey: "userId",
  as: "posts",
});

PostModel.belongsTo(UserModel, {
  foreignKey: "userId",
  as: "user",
});

// Many to Many Association (Through Table)
StudentModel.belongsToMany(CourseModel, {
  through: "StudentCourses", // Create new table
});

CourseModel.belongsToMany(StudentModel, {
  through: "StudentCourses", // Create new table
});
