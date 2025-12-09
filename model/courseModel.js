const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConnect");

const CourseModel = sequelize.define(
  "course",
  {
    title: {
      type: DataTypes.STRING,
      allowNull:false
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

module.exports = { CourseModel };
